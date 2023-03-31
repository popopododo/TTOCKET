import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function TicketDetailQR() {
  const location = useLocation();
  const nickname = useSelector((state: RootState) => state.persistedReducer.user.nickname);  //address 가져오기
  const [qrCode, setQrCode] = useState<string>('');
  const createQRCode = useCallback(
    async () =>{

      let today = new Date();

      let year = today.getFullYear();
      let month = ('0' + (today.getMonth() + 1)).slice(-2);
      let day = ('0' + today.getDate()).slice(-2);

      let dateString = year + '-' + month  + '-' + day;

      let hours = ('0' + today.getHours()).slice(-2); 
      let minutes = ('0' + today.getMinutes()).slice(-2);
      let seconds = ('0' + today.getSeconds()).slice(-2); 

      let timeString = hours + ':' + minutes  + ':' + seconds;
      const data = {
        performId : location.state.performId,
        seatNum : location.state.seatNum,
        nickname : nickname,
        timeQR : dateString + " " + timeString,
      }
      setQrCode(`https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${JSON.stringify(data)}`);
    },[location, nickname]
  )
  useEffect(()=>{
    //createQRCode
    createQRCode();
  },[createQRCode])
  return (
    <div>
      <Link to='/home/detail' state={location.state}>
        <button className='mt-6 ml-2 text-4xl'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
        </button>
      </Link>
      <div className='absolute flex ml-2 top-36'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-red-400 w-11 h-11">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <div>
          <p className='ml-2 text-sm text-white'>캡처한 이미지로는 입장이 불가능합니다.</p>
          <p className='ml-2 text-sm text-white'>어플을 사용해 입장해주세요</p>
        </div>

      </div>
      <div className='px-8'>
          <p className='mt-5 text-2xl font-bold'>{location.state.title}</p>
          <img src={qrCode} alt="qr" className='p-4 mt-4' />
          <button onClick={createQRCode}>새로고침</button>
      </div>
    </div>
  )
}

export default TicketDetailQR