import React from 'react'
import { Route, Routes } from 'react-router'
import BoxDiaryLoading from './BoxDiaryLoading'
import BoxDiaryWrite from './BoxDiaryWrite'

function BoxDiary() {
  return (
    <Routes>
        <Route path="/write" element={<BoxDiaryWrite/>} />
        <Route path="/loading" element={<BoxDiaryLoading/>}/>
    </Routes>
  )
}

export default BoxDiary