import { useState, useEffect } from "react";
import Modal from '../../components/modal/Modal'
import AlreadyModal from '../../components/modal/AlreadyReserveModal'
import axiosApi from "../../services/axiosApi";

function Ticketing(){
    const [seats_state, setSeats_state] = useState<String[]>([]);

    const getSeatInfo = async ()=>{
        const {data} = await axiosApi.get(`/reserve/${6}`); 
        
        // 가져온 걸 set하기
        setSeats_state(data.body.seats_state);
    }
    // 공연 좌석 정보 가져오기
    useEffect(()=>{
        getSeatInfo();
    }, []);

    //모달창 노출 여부 state
    // 모달창 띄우기 false -> true
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
    // 예매할 좌석 정보
    const [seatNumber, setSeatNumber] = useState<number>(-1);

    // 예매 확인 모달 창 띄우기
    const handleReserveModalOpen = (index: number) => {
        setSeatNumber(index);
        setIsModalOpen(true); 
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
                        {seats_state.map((seat, index)=>{
                            if(seat !== 'EMPTY'|| seat !== 'PURCHASED_CANCEL'){
                                return <div className="w-10 h-10 m-1 bg-gray-300 rounded-sm" key={index+1} onClick={handleAlreadyModalOpen}></div>;
                            }else{ 
                                return <div className="w-10 h-10 m-1 rounded-sm bg-ttokPink" key={index+1} onClick={ ()=>{handleReserveModalOpen(index+1) }}></div>;
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