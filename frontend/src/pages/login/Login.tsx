import React from 'react'
import { Route, Routes } from 'react-router'
import InputNickName from './InputNickName'
import LoginMain from './LoginMain'

function Login() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<LoginMain />}></Route>
          <Route path="/login" element={<InputNickName />}></Route>
      </Routes>
    </div>
  )
}

export default Login