import React from 'react'
import { Link } from 'react-router-dom';
import { Route, Routes, useLocation } from 'react-router-dom'
import TicketDetailCard from './TicketDetailCard'
import TicketDetailQR from './TicketDetailQR'

function TicketDetail() {
  const location = useLocation();
  return (
    <div>
      <div className='absolute top-0 z-40 flex items-center justify-center w-screen h-screen bg-black bg-opacity-40'>
          <div className='bg-white rounded-lg shadow-lg bg-opacity-90 TicketDetail'>
          <img src={"https://ipfs.io/ipfs/" + location.state.performPoster} alt="poster" className='absolute rounded-lg TicketBackImg -z-10'/>
            <Routes>
              <Route path="/" element={<TicketDetailCard />}></Route>
              <Route path="/enter" element={<TicketDetailQR/>}></Route>
            </Routes>
          </div>
      </div>
      <div className='absolute z-50 flex justify-center w-full bottom-28'>
        <Link to='/home'>
          <div className='flex items-center justify-center w-12 h-12 bg-ttokPink text-white rounded-full CloseButton'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default TicketDetail