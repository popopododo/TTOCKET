import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import axiosApi from '../../services/axiosApi';
import useWeb3 from '../../services/web3/useWeb3';

function Progress(){
    const location = useLocation();
    const navigate = useNavigate();

    const [address, setAddress] = useState();
    const { tokenContract } = useWeb3();    // 스마트 컨트렉트 계약
    const id = useSelector((state: RootState) => state.persistedReducer.user.id);  //address 가져오기

    const confirmReservation = async () => {
        //예약 확정
        const {data} = await axiosApi.put(`/performance/${location.state.performId}/${location.state.seatNumber}/2`);
        console.log(data);
    }
    const createTicket = async () =>{
        if(!address){
            alert('잘못된 요청입니다.');
            navigate(`/`);
        }
        const result = await tokenContract?.methods.createTicket(21, 'dongdong', 1).send({from : address,
         gas : 1000000});
        console.log(result);

        if(result !== undefined){
            confirmReservation();
            navigate(`/reserve/finish`);
        }
        
    }
    useEffect(()=>{
        
        setAddress(id);

        // 여기서 티켓 민팅
        createTicket();

    }, [id,createTicket]);

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