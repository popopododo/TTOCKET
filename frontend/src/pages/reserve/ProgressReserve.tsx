import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import axiosApi from '../../services/axiosApi';

function Progress(){
    const location = useLocation();
    const navigate = useNavigate();

    const confirmReservation = async () => {
        //예약 확정
        const {data} = await axiosApi.put(`/${location.state.performId}/${location.state.seatNumber}/2`);
        console.log(data);
    }
    
    useEffect(()=>{
        // 여기서 티켓 민팅

        //여기서 티켓 상태 전환
        confirmReservation();
        
        console.log("민팅 중입니다.");
        setTimeout(()=>{
            navigate(`/reserve/finish`);
        },2000);
    });

    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div>
                <img className="w-24 mx-auto" 
                src={require('../../assets/progress.gif')} alt="이미지"></img>
                <p className="mt-4 text-xl font-bold text-center">예매 중</p>
                <p className="mt-4 text-center">잠시만 기다려주세요</p>
            </div>
        </div>
    )
}

export default Progress;