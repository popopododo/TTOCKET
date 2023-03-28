import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function BoxDetail() {
  let location = useLocation();
  const [flipToggle, setFlipToggle] = useState<boolean>(true);
  const [diary, setDiary] = useState();
  
  function ticketClick(event : React.MouseEvent<HTMLElement>) {
    setFlipToggle(!flipToggle);
  }
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
      <div className="mx-8 mt-8 TicketFlip" onClick={ticketClick}>
        <div className={"relative TicketCard "+ (flipToggle ? "is-flipped" : "")}>
          <div className='absolute border-2 rounded-lg TicketFront'>
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
          </div>
          <div className="relative flex items-center justify-center border-2 rounded-lg TicketBack">
              {diary !== undefined && 
                <div className="relative w-full h-full bg-yellow-100">
                <p className="absolute w-full text-xl font-bold text-center top-6">맘마미아는 전설이다!</p>
                <p className="absolute w-full pr-4 text-right top-20">2023.03.10 금요일</p>
                <p className="absolute px-4 top-32 TicketDiaryContent">솔직히 이렇게 재밌을지 몰랐는데 생각보다 괜찮았지.. 일단 배우들 연기력이 대박이었고 무대 구성이나 음악도 너무 좋았다..</p>
              </div>
              }
              {diary === undefined && 
                <div>
                  <div className="flex justify-center">
                    <button>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 hover:text-ttokPink">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
                  <p className="mt-4">나만의 일기를 써보세요</p>
                </div>
              }              
          </div>
        </div>
      </div>
  </div>
  )
}

export default BoxDetail;
