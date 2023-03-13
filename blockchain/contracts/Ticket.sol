// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./TicketDTO.sol";
/*
* 공연 티켓을 ERC-721 Token(NFT)으로 생성하는 Contract
* @author 상미니
*/

contract Ticket is ERC721Enumerable, TicketDTO {
    using Counters for Counters.Counter;
    constructor() ERC721("TTOKET", "TKT") {}


    // NFT(티켓) 생성 시 마다 1씩 증가하는 ID
    Counters.Counter private _tokenIds;

    // NFT 메타데이터 URI 저장을 위한 mapping
    // TokenId => IPFS해시주소
    mapping(uint256 => string) private _tokenURIs;

    // TokenId => 티켓정보
    mapping(uint256 => TicketInfo) private _ticketInfos;

    // NFT 토큰 발행 지갑의 Address 저장을 위한 mapping
    // TokenId => 주인
    mapping(uint256 => address) private _minters;

    // address => TokenId[]
    mapping(address => uint256[]) private _ticketsByAccount;

    // performId => 공연정보
    mapping(uint256 => PerformInfo) private _performInfos;

    // performId => 비하인드 IPFS해시주소 배열
    mapping(uint256 => string[]) private _performBehinds;

    // performId => 티켓 소유자 주소 배열
    mapping(uint256 => address[]) private _ownersByPerform;

    // tokenId => 취소했고 다른 사용자가 구매할 시 환불해줘야하는 금액
    mapping(uint256 => uint256) private _refundAmountByCanceledTicket;

    function createPerform(uint256 performId, address organizer, string memory title,
                        string memory description, uint256 maxSeat, string memory location,
                        uint256 price, uint256 _day, uint256 _hour, uint256 _minute, string memory poster) public returns (uint256){
        
        uint256 performTime = block.timestamp + (_day * 86400) + (_hour * 3600) + (_minute * 60);
        uint256 refundTime14 = performTime - (_day * 86400 * 14); // 14일전 시간
        uint256 refundTime7 = performTime - (_day * 86400 * 7); // 7일전 시간
        uint256 refundTime3 = performTime - (_day * 86400 * 3); // 3일전 시간
        uint256 refundTime1 = performTime - (_day * 86400); // 1일전 시간
        
        PerformInfo memory p = PerformInfo(performId,organizer,title,description,maxSeat,location,price,poster,performTime,refundTime14,refundTime7,refundTime3,refundTime1);
        _setPerformInfo(performId,p);

        return performId;
    }
    /*
    * create
    * 새로운 티켓 정보를 가진 ERC-721 토큰을 생성
    * 
    * @ param 
    * @ return None
    * @ exception None
    */
    function createTicket(uint256 performId, string memory userName, 
                        uint256 seatNum) public payable returns (uint256) {
        
        PerformInfo memory p = _performInfos[performId];
        
        require(p.price == msg.value,"not enough value");
        

        _tokenIds.increment();
        uint256 newTokenId = _tokenIds.current(); 
        TicketInfo memory t = TicketInfo(newTokenId,p.poster,performId,p.title,p.location,userName,seatNum,1);
        _mint(msg.sender, newTokenId); 
        _setMinter(newTokenId, msg.sender);
        _setTokenURI(newTokenId, p.poster);
        _setTicketInfo(newTokenId, t);
        _setTicketsByAccount(newTokenId, msg.sender);
        _setOwnersByPerform(performId, msg.sender);

        return newTokenId;
    }
    function insertPerformBehind(uint256 performId, string memory behindAddress) public returns(uint256){
        _performBehinds[performId].push(behindAddress);

        return performId;
    }
    function cancleMyTicket(uint256 tokenId) public returns (uint256){
        require(_minters[tokenId] == msg.sender, "you're not owner of this ticket");
        require(_ticketInfos[tokenId].status != 2, "already canceled ticket");
        uint256 nowTime = block.timestamp;
        PerformInfo memory p = _performInfos[tokenId];
        require(nowTime <= p.performTime, "already finished perform");

        uint256 refundAmount = 0;
        if(nowTime >= p.refundTime1){ // 30퍼 환불
            refundAmount = p.price * 30 / 100;
        }
        else if(nowTime >= p.refundTime3){ // 50퍼 환불
            refundAmount = p.price * 50 / 100;     
        }
        else if(nowTime >= p.refundTime7){ // 70퍼 환불
            refundAmount = p.price * 70 / 100;     
        }
        else if(nowTime >= p.refundTime14){ // 80퍼 환불
            refundAmount = p.price * 80 / 100; 
        }
        payable(msg.sender).transfer(refundAmount); 
        // 환불이 성공해야 취소관련 정보 바꿈

        _ticketInfos[tokenId].status = 2; // 티켓상태 취소로 바꿈
        address[] memory owners = _ownersByPerform[p.id];
        uint256 idx;
        for(uint256 i = 0 ; i < owners.length ; i++){ // 해당 공연 티켓소유자 배열에서 없애기
            if(owners[i] == msg.sender) {
                _ownersByPerform[p.id][idx] = owners[owners.length - 1];
                _ownersByPerform[p.id].pop();
                break;
            }
        }
        approve(address(this), tokenId); // 해당 NFT권한을 해당 컨트랙트 주소에 허용시키기
        _refundAmountByCanceledTicket[tokenId] = p.price - refundAmount; 
        return refundAmount;
    }
    function buyCanceledTicket(uint256 tokenId,uint256 performId) public payable returns (uint256){
        PerformInfo memory p = _performInfos[performId];
        require(p.price == msg.value,"not enough value");

        address beforeOwner = _minters[tokenId];
        payable(beforeOwner).transfer(_refundAmountByCanceledTicket[tokenId]); //다른애가 사주니까 수수료도 돌려주기
        _refundAmountByCanceledTicket[tokenId] = 0; // 없애기
        safeTransferFrom(beforeOwner, msg.sender, tokenId); // NFT티켓 소유권 바꾸기
        _minters[tokenId] = msg.sender;
        _setOwnersByPerform(p.id,msg.sender);

        return tokenId;
    }

    function getBehindList(uint256 performId) public view returns(string[] memory){
        return _performBehinds[performId];
    }
    function getTicketList(address user) public view returns(TicketInfo[] memory){
        uint256[] memory tickets = getTicketsByAccount(user);
        TicketInfo[] memory userTickets = new TicketInfo[](tickets.length);
        for(uint256 i=0; i<tickets.length ; i++){
            uint256 nowTokenId = tickets[i];
            userTickets[i] = _ticketInfos[nowTokenId];
        }
        return userTickets;
    }
    // ERC721URIStorage: TokenURI setter
    function _setTokenURI(
            uint256 tokenId, 
            string memory _tokenURI
        ) internal virtual {
        require(_exists(tokenId), "ERC721URIStorage: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }
    function getTokenURI(uint256 tokenId) public view returns (string memory) {
        return _tokenURIs[tokenId];
    }
    function _setTicketInfo(
            uint256 tokenId, 
            TicketInfo memory _ticketInfo
        ) private {
        _ticketInfos[tokenId] = _ticketInfo;
    }
    function getTicketInfo(uint256 tokenId) public view returns (TicketInfo memory) {
        return _ticketInfos[tokenId];
    }
    function _setMinter(
            uint256 tokenId, 
            address minter
        ) private {
        _minters[tokenId] = minter;
    }
    function getMinter(uint256 tokenId) public view returns (address) {
        return _minters[tokenId];
    }
    function _setTicketsByAccount(
            uint256 tokenId, 
            address minter
        ) private {
        _ticketsByAccount[minter].push(tokenId);
    }
    function getTicketsByAccount(address minter) public view returns (uint256[] memory) {
        return _ticketsByAccount[minter];
    }
    function _setPerformInfo(
            uint256 performId, 
            PerformInfo memory _performInfo
        ) private {
        _performInfos[performId] = _performInfo;
    }
    function getPerformInfo(uint256 performId) public view returns (PerformInfo memory) {
        return _performInfos[performId];
    }
    function _setOwnersByPerform(
            uint256 performId, 
            address minter
        ) private {
        _ownersByPerform[performId].push(minter);
    }
    function getOwnersByPerform(uint256 performId) public view returns (address[] memory) {
        return _ownersByPerform[performId];
    }
}