import React from 'react'
import { Link } from 'react-router-dom'

function BoxDiaryWrite() {
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
      <div className='flex justify-center mt-8'>
        <div className='TicketSize flex items-center justify-center border-2 rounded-lg bg-white'>
          <div className='w-full'>
            <div className='mx-4 p-2 border-b-2 w-72'>
              <input type="text" placeholder='제목을 입력해주세요'/>
            </div>
            <input type="text" placeholder='소제목을 입력해주세요'/>
            <textarea placeholder='내용을 입력해주세요'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxDiaryWrite