import { Link } from "react-router-dom";

function FinishReserve(){

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div>
                <img className="mx-auto w-24" 
                src={require('../../assets/success.gif')}></img>
            
                <p className="text-center mt-2">예매 완료!</p>
                <div className="flex my-4">
                    <Link className="px-8 py-1 mt-4 mx-auto bg-ttokPink rounded-xl text-white text-xl font-bold" to="/home">티켓 보기</Link>
                </div>
            </div>
        </div>
    )
}

export default FinishReserve;