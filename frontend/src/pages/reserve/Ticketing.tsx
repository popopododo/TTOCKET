import { useState, useEffect } from "react";
import Modal from '../../components/modal/Modal'
import AlreadyModal from '../../components/modal/AlreadyReserveModal'
import axiosApi from "../../services/axiosApi";
import { useLocation } from "react-router";

interface Perform {
    title : string;
    location : string;
}

function Ticketing(){
    const [seats_state, setSeats_state] = useState<String[]>([]);
    const [performInfo, setPerformInfo] = useState<Perform>({title : '', location : ''});
    const [performId, setPerformId] = useState<number>(0);
    const location = useLocation();

    const getSeatInfo = async (performId:number)=>{


        const {data} = await axiosApi.get(`/performance/reserve/${performId}`); 
        
        // 좌석 정보 set하기
        setSeats_state(data.body.seats_state);

        // 공연 정보 set
        setPerformInfo(data.body.perform);
        
        console.log(data.body);
        
    }
    // 공연 좌석 정보 가져오기
    useEffect(()=>{
        console.log(location.state);
        setPerformId(location.state);

        //공연 아이디
        getSeatInfo(location.state);
    }, [location.state]);

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
            <div className="m-2 mt-20">
                <p className="text-xl font-bold">{performInfo.title? performInfo.title : ''}</p>
                <p className="text-xs">{performInfo.location? performInfo.location : ''}</p>
                <div className="flex items-center justify-center h-32 mt-4 bg-gray-200 rounded-sm">
                    <p className="text-lg font-bold">STAGE</p>
                </div>
                <div className="mt-20">
                    <div className="flex">
                        <span className="ml-2 mr-auto text-xl font-bold">좌석</span>
                        <button className="mr-2" onClick={()=>{getSeatInfo(location.state)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </button>
                    </div>
                    <div className="grid grid-flow-col grid-cols-8 mt-4">
                        {/* 좌석 섹션 */}
                        {seats_state.map((seat, index)=>{
                            if(seat === 'EMPTY'){
                                return <div className="w-10 h-10 m-1 rounded-sm bg-ttokPink" key={index} onClick={ ()=>{handleReserveModalOpen(index+1) }}></div>;
                            }else{ 
                                return <div className="w-10 h-10 m-1 bg-gray-300 rounded-sm" key={index} onClick={handleAlreadyModalOpen}></div>;
                            }
                            
                        })}
                    </div>
                </div>
                
            </div>
            <Modal isOpen={isModalOpen} onClose={handleReserveModalClose} seatNumber={seatNumber} performId={performId}/>
            <AlreadyModal isOpen={AlreadyModalOpen} onClose={handleAlreadyModalClose}/>
        </div>
    )
}

export default Ticketing;