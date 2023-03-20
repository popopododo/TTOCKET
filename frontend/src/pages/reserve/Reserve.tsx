import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Ticketing from './Ticketing'
import Progress from './ProgressReserve'
import FinishReserve from './FinishReserve'

function Reserve() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Ticketing/>}/>
        <Route path="/progress/*" element={<Progress/>}/>
        <Route path="/finish" element={<FinishReserve/>}/>
      </Routes>
      
    </div>
  )
}

export default Reserve