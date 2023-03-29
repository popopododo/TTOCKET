import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function TicketDetailCard() {
  const [onModal, setOnModal] = useState<boolean>(false);
  const location = useLocation();
  function modalOpen() {
    setOnModal(!onModal);
  }

  return (
    <div>
        <Link to="/home">
            <button className='mt-6 ml-2 text-4xl'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
        </Link>
        <div className='px-8'>
            <div className='overflow-hidden'>
                <p className='text-xl font-bold marqueeStyle'>{location.state.title}</p>
            </div>
            <p className='mt-8'>{location.state.location}</p>
            <p className='mt-2'>2020.04.01 16:00 </p>
            <p className='mt-2'>1열 {location.state.seatNum}번</p>

            <Link to="/home/detail/enter" state={location.state}>
                <button className='w-full h-12 mt-10 text-white rounded-lg bg-ttokPink'> QR 입장 확인 </button>
            </Link>
            <button onClick={modalOpen} className='w-full h-12 mt-2 text-white rounded-lg bg-ttokPink'> 예매 취소 </button>
        </div>
        {onModal && 
            <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-40'>
                <div className='flex items-center justify-center p-4 bg-white rounded-lg shadow-xl h-28'>
                    <div>

                        <p className='mb-4'>정말로 예매를 취소하시겠습니까?</p>
                        <div className='flex items-center justify-center'>
                            <button className='w-20 h-8 mx-4 bg-gray-200 rounded-full'>네</button>
                            <button onClick={modalOpen} className='w-20 h-8 mx-4 bg-gray-200 rounded-full'>아니오</button>
                        </div>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default TicketDetailCard