import { useEffect } from "react";
import { useNavigate } from "react-router";

function Progress(){
    const navigate = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigate(`/home/reserve/finish`);
        },3000);
    });

    return (
        <div>
            예약 진행 중!!!
        </div>
    )
}

export default Progress;