import React from 'react'
import { Link } from 'react-router-dom'


function InputNickName() {
  return (
    <div className='flex items-center justify-center w-screen h-screen'>
        <div>
            <p className='text-5xl text-center my-7 text-ttokPink NickName'>똑켓</p>
            <div className='flex items-center justify-center h-48 border-2 border-gray-100 rounded-lg shadow-lg w-72'>
                <div className='w-full p-4'>
                    <p className='text-2xl'>닉네임<span className='text-base'> (최대 8글자)</span></p>
                    <input type="text" className='w-full h-10 px-2 mt-4 rounded-md bg-slate-100' placeholder='사용할 닉네임을 입력해주세요' />
                    <div className='flex justify-center'>
                        <Link to="/home">
                            <button className='h-10 px-4 mt-4 rounded-md bg-ttokLightPink'>로그인</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputNickName