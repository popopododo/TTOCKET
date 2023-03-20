import { useEffect } from "react";
import { useNavigate } from "react-router";

function Progress(){
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate(`/home/reserve/finish`);
        },2000);
    });

    return (
        <div className="min-h-full">
            <img className="mx-auto mt-24 w-24" 
            src={require('../../assets/progress.gif')}></img>
            <p className="text-center mt-4 text-xl font-bold">예매 중</p>
            <p className="text-center mt-4">잠시만 기다려주세요</p>
        </div>
    )
}

export default Progress;