import React from 'react'
import { Link } from 'react-router-dom'
import MetaMaskLogo from '../assets/metamaskLogo.png'
import LoginImg1 from '../assets/loginImg1.png'
import LoginImg2 from '../assets/loginImg2.png'
import LoginImg3 from '../assets/loginImg3.png'
import LoginImg4 from '../assets/loginImg4.png'
import LogoWhite from '../assets/logoWhite.png'
import Slider from 'react-slick'
import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css"; 

function Login() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className='w-screen h-screen py-10 bg-ttokLightPink'>
      <img src={LogoWhite} alt="" className='mx-auto mt-8'/>

      {/* <div className='flex mx-20 overflow-auto'>
        <div className='w-56'>
          <img src={LoginImg1} alt="" className='object-cover w-56 mx-auto my-10 border-t-2 border-l-4 border-r-4 border-black rounded-lg shadow-md h-80' />
          <p>신분증, 예약 내역 필요 없이, </p>
          <p>어플 하나로 편하게 입장하세요</p>
        </div>
          <img src={LoginImg1} alt="" className='object-cover w-56 mx-auto my-10 border-t-2 border-l-4 border-r-4 border-black rounded-lg shadow-md h-80' />
          <img src={LoginImg1} alt="" className='object-cover w-56 mx-auto my-10 border-t-2 border-l-4 border-r-4 border-black rounded-lg shadow-md h-80' />
          <img src={LoginImg1} alt="" className='object-cover w-56 mx-auto my-10 border-t-2 border-l-4 border-r-4 border-black rounded-lg shadow-md h-80' />
      </div> */}
      <Slider {...settings}>
          <div>
            <img src={LoginImg1} alt="" className='object-contain w-48 h-64 mx-auto mt-10 mb-10 border-t-2 border-l-4 border-r-4 border-black shadow-md rounded-2xl' />
            <p className='text-xl text-center text-white'>NFT 기반 스마트 티켓</p>
            <p className='mt-8 text-center text-ttokGray'>신분증, 예약 내역 필요 없이 </p>
            <p className='mt-2 mb-4 text-center text-ttokGray'>어플 하나로 편하게 입장하세요 </p>
          </div>
          <div>
            <img src={LoginImg2} alt="" className='object-contain w-48 h-64 mx-auto mt-10 mb-10 border-t-2 border-l-4 border-r-4 border-black shadow-md rounded-2xl' />
            <p className='text-xl text-center text-white'>나만의 티켓 보관함</p>
            <p className='mt-4 text-center text-ttokGray'>티켓도 하나의 기념품! </p>
            <p className='my-2 text-center text-ttokGray'>티켓 보관함을 통해 보관하세요 </p>
          </div>
          <div>
            <div className="relative mb-5 h-80">
              <img className="absolute top-0 object-cover mx-auto mt-10 mb-5 border-t-2 border-l-4 border-r-4 border-black shadow-md w-44 h-60 left-36 rounded-2xl" src={LoginImg4} alt="로그인 이미지4"/>
              <img className="absolute object-cover mx-auto mt-10 mb-5 border-t-2 border-l-4 border-r-4 border-black shadow-md w-44 h-60 top-4 left-20 rounded-2xl" src={LoginImg3} alt="로그인 이미지4" />
            </div>
            <p className='text-xl text-center text-white'>이더리움 기반 티켓팅</p>
            <p className='mt-4 text-center text-ttokGray'>MetaMask 지갑을 연결해서 </p>
            <p className='my-2 text-center text-ttokGray'>간편하게 결제해보세요!</p>
          </div>
        </Slider>
      
      <Link to="/home">
        <div className='flex content-center h-16 mx-auto mt-16 bg-white rounded-full shadow-md px-auto w-72' >
          <div className='flex mx-auto my-auto'>
            <img src={MetaMaskLogo} className="w-8 h-8" alt="" />
            <p className='ml-4 text-xl'>Meta Mask로 로그인</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Login