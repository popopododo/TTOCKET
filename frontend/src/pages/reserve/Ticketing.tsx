import { useState } from "react";
import { useLocation } from "react-router";
import Modal from '../../components/modal/Modal'
import AlreadyModal from '../../components/modal/AlreadyReserveModal'

// const seat = [1,2,3,4,5,6,7,8];
const seat = [true,false,true,false,true,true,true,true]

function Ticketing(){
    //모달창 노출 여부 state
    // 모달창 띄우기 false -> true
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const location = useLocation();
    console.log(location.state);
    
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
    return (
        <div>
            {/* 헤더 */}
            <div className="m-2">
                <p className="text-xl font-bold">콜드 플레이 내한공연</p>
                <p className="text-xs">현대카드 슈퍼콘서트 2023 S/S S</p>
                <div className="flex items-center justify-center h-32 mt-4 bg-gray-200 rounded-sm">
                    <p className="text-lg font-bold">STAGE</p>
                </div>
                <div className="mt-20">
                    <div className="grid grid-flow-col grid-cols-8">
                        {/* 좌석 섹션 */}
                        {seat.map((sId, index)=>{
                            if(sId){
                                return <div className="w-10 h-10 m-1 bg-gray-300 rounded-sm" key={index} onClick={handleAlreadyModalOpen}></div>;
                            }else{
                                return <div className="w-10 h-10 m-1 rounded-sm bg-ttokPink" key={index} onClick={ ()=>{handleReserveModalOpen(index) }}></div>;
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