import { useState } from "react";
import Modal from '../../components/modal/Modal'

// const seat = [1,2,3,4,5,6,7,8];
const seat = [true,false,true,false,true,true,true,true]
const seat2 = [1,2,3,4,5,6,7,8];
let flag:boolean = false;

function Ticketing(){
    //모달창 노출 여부 state
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    // 모달창 띄우기 false -> true
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
      setIsModalOpen(true);
    };
  
    const handleModalClose = () => {
      setIsModalOpen(false);
    };
    
    const showMsg = (msg : string) =>{
        alert(msg);
    }
    return (
        <div>
            {/* 헤더 */}
            <div className="m-2">
                <p className="font-bold">콜드 플레이 내한공연</p>
                <p className="text-xs">현대카드 슈퍼콘서트 2023 S/S S</p>
                <div className="bg-gray-200 rounded-sm mt-4 h-32 flex items-center justify-center">
                    <p className="font-bold text-lg">STAGE</p>
                </div>
                <div className="mt-20">
                    <div className="grid grid-flow-col grid-cols-8">
                        {/* 좌석 섹션 */}
                        {seat.map((sId, index)=>{
                            if(sId){
                                return <div className="bg-gray-300 rounded-sm h-10 w-10 m-1" key={index}></div>;
                            }else{
                                // return <div className="bg-gray-900 rounded-sm h-10 w-10 m-1" key={index} onClick={() => {showMsg(`뿌잉 ${index}`)}}></div>;
                                return <div className="bg-ttokPink rounded-sm h-10 w-10 m-1" key={index} onClick={ handleModalOpen }></div>;
                            }
                            
                        })}
                    </div>
                    <div className="grid grid-flow-col grid-cols-8">
                        {/* 좌석 섹션 */}
                        {flag && seat2.map((sId, index)=>{
                            return <div className="bg-gray-200 rounded-sm h-10 w-10 m-1" key={sId} onClick={() => {showMsg(`뿌잉 ${sId}`)}}></div>;
                        })}
                    </div>
                </div>
                
            </div>
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        
            </Modal>
            
            {/* Footer */}
        </div>
    )
}

export default Ticketing;