import React from "react";
import { Link, useLocation } from "react-router-dom";

function BoxDetail() {
  let location = useLocation();
  console.log(location.state);
  return (
  <div className="mt-32">
      <button className='ml-2'>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <Link to='/box'>
            <p>목록으로</p> 
          </Link>
        </div>
      </button>
      <div className='relative flex-shrink-0 mx-8 mt-8 border-2 rounded-lg shadow-lg Ticket1'>
          <Link to=''>
              <div className='absolute flex items-center justify-center w-8 h-full border-r-2 border-dashed'>
                  <p className='absolute text-xs text-center w-60 TicketTitleSmall'>
                      {location.state.title}
                  </p>
              </div>
              <div className="absolute h-full left-8 TicketRight">
                <img src={location.state.performPoster} alt="공연 이미지" className='absolute m-2 rounded-lg TicketImg' />
                <div className='absolute bottom-0 w-16 bg-white border-t-2 border-r-2 rounded-tr-lg h-28'>
                    <p className='text-sm text-center'>2022</p>
                    <p className='text-3xl font-bold text-center'>04</p>
                    <p className='text-3xl font-bold text-center'>01</p>
                    <p className='text-sm text-center'>18:00</p>
                </div>
                <div className='absolute bottom-0 h-20 pt-2 TicketInfo left-16'>
                    <p className='m-2 text-sm text-right truncate'>{location.state.location}</p>
                    <p className='m-2 text-lg font-bold text-center'>1층 A구역 23번</p>
                </div>
            </div>
          </Link>
      </div>
  </div>
  )
}

export default BoxDetail;
