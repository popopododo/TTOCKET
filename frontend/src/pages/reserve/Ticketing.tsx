import { useState } from "react";
import Modal from '../../components/modal/Modal'
import AlreadyModal from '../../components/modal/AlreadyReserveModal'
// const seat = [1,2,3,4,5,6,7,8];
const seat = [true,false,true,false,true,true,true,true]

function Ticketing(){
    //모달창 노출 여부 state
    // 모달창 띄우기 false -> true
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // 예매할 좌석 정보
    const [seatNumber, setSeatNumber] = useState<number>(-1);

    const handleReserveModalOpen = (index: number) => {
        setSeatNumber(index);
        setIsModalOpen(true); // 모달 창 띄우기
    };
  
    const handleReserveModalClose = () => {
      setIsModalOpen(false);
    };

    const [AlreadyModalOpen, setAlreadyModalOpen] = useState(false);
    const handleAlreadyModalOpen = () =>{
        setAlreadyModalOpen(true);
    }
    const handleAlreadyModalClose = () =>{
        setAlreadyModalOpen(false);
    }
    const showMsg = (msg : string) =>{
        alert(msg);
    }
    return (
        <div>
            {/* 헤더 */}
            <div className="m-2">
                <p className="font-bold text-xl">콜드 플레이 내한공연</p>
                <p className="text-xs">현대카드 슈퍼콘서트 2023 S/S S</p>
                <div className="bg-gray-200 rounded-sm mt-4 h-32 flex items-center justify-center">
                    <p className="font-bold text-lg">STAGE</p>
                </div>
                <div className="mt-20">
                    <div className="grid grid-flow-col grid-cols-8">
                        {/* 좌석 섹션 */}
                        {seat.map((sId, index)=>{
                            if(sId){
                                return <div className="bg-gray-300 rounded-sm h-10 w-10 m-1" key={index} onClick={handleAlreadyModalOpen}></div>;
                            }else{
                                return <div className="bg-ttokPink rounded-sm h-10 w-10 m-1" key={index} onClick={ ()=>{handleReserveModalOpen(index) }}></div>;
                            }
                            
                        })}
                    </div>
                </div>
                
            </div>
            <Modal isOpen={isModalOpen} onClose={handleReserveModalClose} seatNumber={seatNumber}>
        
            </Modal>
            <AlreadyModal isOpen={AlreadyModalOpen} onClose={handleAlreadyModalClose}>
        
            </AlreadyModal>
        </div>
    )
}

export default Ticketing;