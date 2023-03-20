// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

interface TicketDTO {
    struct TicketInfo {
        uint256 tokenId;
        string performPoster; // 공연 
        uint256 performId;
        string title;
        string location;
        string userName;
        uint256 seatNum;
        uint256 status; // 1 : 예매완료, 2 : 취소티켓, 3 : 취소후구매된티켓
    }
    struct PerformInfo {
        uint16 id;
        address organizer;
        string title;
        string description;
        uint16 maxSeat;
        string location;
        uint256 price;
        string poster;
        uint256 performTime;
    }
    struct PerformRefundInfo{
        uint256 refundTime14;
        uint256 refundTime7;
        uint256 refundTime3;
        uint256 refundTime1;         
    }
} 