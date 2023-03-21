import React from 'react'
import Slider from 'react-slick';
import "../../css/Ticket.css";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css"; 


function TicketHome() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
    <div className='w-screen h-screen py-20'>
        <p className='my-10 text-xl text-center'>나의 티켓</p>
        <Slider {...settings} className="TicketList">
            <div>
                <div className='relative mx-auto border-2 rounded-lg shadow-lg Ticket1'>
                    <div className='absolute flex items-center justify-center w-8 h-full border-r-2 border-dashed'>
                        <p className='absolute text-xs text-center w-60 TicketTitleSmall'>
                            뮤지컬 맘마미아!
                        </p>
                    </div>
                    <div className="absolute h-full left-8 TicketRight">
                        <img src="https://ticketimage.interpark.com/Play/image/large/23/23002291_p.gif" alt="공연 이미지" className='absolute m-2 rounded-lg TicketImg' />
                        <div className='absolute bottom-0 w-16 bg-white rounded-tr-lg h-28'>
                            <p className='text-sm text-center'>2022</p>
                            <p className='text-3xl font-bold text-center'>04</p>
                            <p className='text-3xl font-bold text-center'>01</p>
                            <p className='text-sm text-center'>18:00</p>
                        </div>
                        <div className='absolute bottom-0 h-20 pt-2 TicketInfo left-16'>
                            <p className='m-2 text-sm text-right'>성남 아트홀</p>
                            <p className='m-2 text-lg font-bold text-center'>1층 A구역 23번</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='relative mx-auto border-2 rounded-lg shadow-lg Ticket1'>
                    <div className='absolute flex items-center justify-center w-8 h-full border-r-2 border-dashed'>
                        <p className='absolute text-xs text-center w-60 TicketTitleSmall'>
                            뮤지컬 맘마미아!
                        </p>
                    </div>
                    <div className="absolute h-full left-8 TicketRight">
                        <img src="https://ticketimage.interpark.com/Play/image/large/23/23002291_p.gif" alt="공연 이미지" className='absolute m-2 rounded-lg TicketImg' />
                        <div className='absolute bottom-0 w-16 bg-white rounded-tr-lg h-28'>
                            <p className='text-sm text-center'>2022</p>
                            <p className='text-3xl font-bold text-center'>04</p>
                            <p className='text-3xl font-bold text-center'>01</p>
                            <p className='text-sm text-center'>18:00</p>
                        </div>
                        <div className='absolute bottom-0 h-20 pt-2 TicketInfo left-16'>
                            <p className='m-2 text-sm text-right'>성남 아트홀</p>
                            <p className='m-2 text-lg font-bold text-center'>1층 A구역 23번</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='relative mx-auto border-2 rounded-lg shadow-lg Ticket1'>
                    <div className='absolute flex items-center justify-center w-8 h-full border-r-2 border-dashed'>
                        <p className='absolute text-xs text-center w-60 TicketTitleSmall'>
                            뮤지컬 맘마미아!
                        </p>
                    </div>
                    <div className="absolute h-full left-8 TicketRight">
                        <img src="https://ticketimage.interpark.com/Play/image/large/23/23002291_p.gif" alt="공연 이미지" className='absolute m-2 rounded-lg TicketImg' />
                        <div className='absolute bottom-0 w-16 bg-white rounded-tr-lg h-28'>
                            <p className='text-sm text-center'>2022</p>
                            <p className='text-3xl font-bold text-center'>04</p>
                            <p className='text-3xl font-bold text-center'>01</p>
                            <p className='text-sm text-center'>18:00</p>
                        </div>
                        <div className='absolute bottom-0 h-20 pt-2 TicketInfo left-16'>
                            <p className='m-2 text-sm text-right'>성남 아트홀</p>
                            <p className='m-2 text-lg font-bold text-center'>1층 A구역 23번</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </Slider>
    </div>
  )
}

export default TicketHome