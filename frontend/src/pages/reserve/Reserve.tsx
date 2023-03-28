import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Ticketing from './Ticketing'
import ReserveProgress from './ReserveProgress'
import ReserveFinish from './ReserveFinish'
import HeaderNav from '../../components/HeaderNav'
import ReserveFail from './ReserveFail'

function Reserve() {
  return (
    <div>
      <HeaderNav />
        <Routes>
          <Route path="/" element={<Ticketing/>}/>
          <Route path="/progress" element={<ReserveProgress/>}/>
          <Route path="/fail" element={<ReserveFail/>}/>
          <Route path="/finish" element={<ReserveFinish/>}/>
        </Routes>
      
    </div>
  )
}

export default Reserve