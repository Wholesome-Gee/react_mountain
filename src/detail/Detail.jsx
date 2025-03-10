import React, { useEffect, useState } from 'react'
import './Detail.css'
import axios from 'axios'
import { Link, useLocation } from 'react-router-dom'

function Detail() {
  const {산이름,산높이} = useLocation().state
  const [산특징, set산특징] = useState('')
  const [산소재지, set산소재지] = useState('')
  const [산사진, set산사진] = useState('')
  const [명산선정이유, set명산선정이유] = useState('')
  let key = import.meta.env.VITE_ALLMOUNT_KEY_
  
  useEffect(()=>{
    getMountInformation()
  },[])

  async function getMountInformation() {
    let response = (await axios.get(`http://openapi.forest.go.kr/openapi/service/trailInfoService/getforeststoryservice?ServiceKey=${key}&mntnNm=${산이름}`)).data.response.body.items.item;

    if(Array.isArray(response)){
      response.map((item)=>{
        item.mntnsbttlinfo.trim() !== '' && item.mntnsbttlinfo !== "&amp;nbsp;" && set산특징(item.mntnsbttlinfo)
        item.mntninfopoflc.trim() !== '' && item.mntninfopoflc !== "&amp;nbsp;" && set산소재지(item.mntninfopoflc)
        item.mntnattchimageseq.trim() !== '' && item.mntnattchimageseq !== "&amp;nbsp;" && set산사진(item.mntnattchimageseq)
        item.hndfmsmtnslctnrson.trim() !== '' && item.hndfmsmtnslctnrson !== "&amp;nbsp;" && set명산선정이유(item.hndfmsmtnslctnrson)
      })
      console.log(5,산특징,산소재지,명산선정이유);
    } else {
      response.mntnsbttlinfo.trim() !== '' && response.mntnsbttlinfo !== "&amp;nbsp;" && set산특징(response.mntnsbttlinfo)
        response.mntninfopoflc.trim() !== '' && response.mntninfopoflc !== "&amp;nbsp;" && set산소재지(response.mntninfopoflc)
        response.mntnattchimageseq.trim() !== '' && response.mntnattchimageseq !== "&amp;nbsp;" && set산사진(response.mntnattchimageseq)
        response.hndfmsmtnslctnrson.trim() !== '' && response.hndfmsmtnslctnrson !== "&amp;nbsp;" && set명산선정이유(response.hndfmsmtnslctnrson)
    }
  }
  
  function handleClickCloseBtn() {
    window.history.back()
  }
  

  return (
    <div className='detail'>
      <div className='detail_box'>
        <div className="inner">
          <img src={산사진?산사진:`/no-screenshot.jpg`} alt='산사진'></img>
          <h1 className='name'>{산이름}</h1>
          <p> 1️⃣ 해발고도 </p>
          <p className='height fs-sm'>{산높이}m </p>
          <p> 2️⃣소재지</p>
          <p className='location fs-sm'>{산소재지}</p>
          <p> 3️⃣ 특징</p>
          <p className='character fs-sm'>{산특징}</p>
          <p>4️⃣100대 명산선정 이유</p>
          <p className='description fs-sm'>{명산선정이유==='&amp;nbsp;'?null:명산선정이유}</p>
          </div>
          <Link to={`https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${산이름}`}>Naver로 이동</Link>
          <button className='btn-close' onClick={handleClickCloseBtn}>X</button>
        </div>
      </div>
  )
}

export default Detail