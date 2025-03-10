import axios from 'axios'
import React, { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

function Card({mountain, setMountain,index}) {
  const [산정보, set산정보] = useState([])
  const [numOfRows, setNumOfRows] = useState(20)
  const [hover, setHover] = useState(false)

  let 산주소 = mountain.addrNm
  let 산위치 = mountain.ctpvNm // ex) '경상북도' /  '강원도'
  let 산높이 = mountain.aslAltide
  let 산번호 = mountain.frtrlId // 산 고유 ID
  let 산이름 = mountain.frtrlNm
  let 경도 = mountain.lot
  let 위도 = mountain.lat
  let key = import.meta.env.VITE_ALLMOUNT_KEY_
  
  return (
    <div className='card_container'>
      <Link to={`/${산번호}`} state={{산이름,산높이}} className="card">
        <div className='card_index'>{index+1}</div>
        <p className="card_name">{산이름}</p>
        <p className='card_location'>위치 : {산위치}</p>
        <p className="card_height">해발고도 : {산높이}m</p>
      </Link>
    </div>
  )
}

export default Card