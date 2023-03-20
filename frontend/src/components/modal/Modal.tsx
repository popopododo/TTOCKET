import React from 'react';
import { ReactNode, useState } from "react";
import { Link } from 'react-router-dom';

interface BtnProps {
  children: ReactNode;
  isOpen : boolean;
  seatNumber : number;
  onClose : ()=>void;

}
const Modal = ({ isOpen, onClose, seatNumber} : BtnProps) => {
  const [isAgree, setIsAgree] = useState<boolean>(false);
  console.log(seatNumber);
  
  const handleIsAgree = () =>{
    setIsAgree(!isAgree);
  }
  const modalStyles = isOpen ? 'fixed inset-0 z-50 overflow-y-auto' : 'hidden';
  const overlayStyles = isOpen ? 'absolute inset-0 bg-gray-700 opacity-75' : 'hidden';
  const contentStyles = isOpen ? 'bg-white rounded-t-lg shadow-lg transform translate-y-0' : 'transform translate-y-full';

  return (
    <div className={modalStyles}>
      <div className={overlayStyles} onClick={onClose}></div>
      <div className={`absolute p-6 sm:p-8 lg:p-10 w-full max-w-md mx-auto rounded-lg transition-all duration-300 top-2/4 ${contentStyles}`}>
        <button className="absolute top-0 right-0 mt-4 mr-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* 취소 수수료 안내 테이블 */}
        <h2 className="text-lg font-bold mb-4">취소 수수료 안내</h2>
        <table>
          <tbody>
            <tr>
                <td> {seatNumber} 기간</td>
                <td>수수료 부과율</td>
            </tr>
            <tr>
                <td>D-7</td>
                <td>50%</td>
            </tr>
          </tbody>
        </table>
        {/* 체크 박스 */}
        <div className='my-4'>
          <input className="w-4 h-4" id="default-checkbox" type="checkbox" onChange={handleIsAgree}></input>
          <span className="mb-4 ml-2 text-xs">취소 수수료 안내사항을 읽었으며, 이에 동의합니다.</span>
        </div>
        <div className="flex">
          <Link className="px-14 py-1 mx-auto bg-ttokPink text-white rounded-lg" onClick={onClose} to="/home/reserve/progress">예매</Link>
          <button className="px-14 py-1 mx-auto bg-gray-300 text-black rounded-lg" onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
