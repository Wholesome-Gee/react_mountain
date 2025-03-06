import axios from 'axios'
import React, { useState } from 'react'
import './Card.css'

function Card({mountain, setMountain}) {
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


  // async function getMountImg(){
  //   let url = `http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice?ServiceKey=${key}&mntnNm=${산이름}`
  //   let response = await (await axios.get(url)).data.
  //   console.log(response);
    
  //   // set산정보(response.data.response.body.items.item);
  // }

  // getMountImg()
  
  return (
    <div className="card">
      <img className="card_img" src='/no-screenshot.jpg'></img>
      <p className="card_name">
        {산이름} <span>({산높이}m)</span>
      </p>
      <p className='card_tag'>{산위치}</p>
    </div>
  )
}

export default Card