import { useEffect } from "react";
import { useNavigate } from "react-router";

function Progress(){
    const navigate = useNavigate();

    useEffect(()=>{
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