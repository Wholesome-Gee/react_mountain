import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react'
import Nav from './components/nav/Nav'
import Section from './components/section/Section'
import Footer from './components/footer/Footer'

function App() {
  const [mountains, setMountains] = useState([])
  const [count, setCount] = useState(1)
  // const [numOfRows, setNumOfRows] = useState(6)
  let url = {
    baseUrl : 'http://apis.data.go.kr/B553662/top100FamtListBasiInfoService',
    subUrl : 'getTop100FamtListBasiInfoList',
    serviceKey : import.meta.env.VITE_HUNDREDMOUNT_KEY_,
    type : 'json',
    numOfRows : 3 * count, // 한번에 보여줄 산 개수
    pageNo : 1, 
  }
  // let today = {
  //   연도 : new Date().toString().slice(11,15),
  //   월 : ( new Date().getMonth()+1 ).toString().padStart(2,'0'), // js는 월을 0부터 센다.
  //   일 : new Date().toString().slice(8,10)
  // }

  
  useEffect(()=>{
    getMountains()
    console.log('@@');
    console.log(mountains);
  },[])

  // 100대 명산 데이터출력 ctpvNm : 위치(도) / addrNm = 위치(도/시/면) / aslAltide = 해발고도 / frtrlNm = 산이름 / lat = 위도 / lot = 경도 / frtrlId = 산ID
  async function getMountains() {
    const response = (await axios.get(`${url.baseUrl}/${url.subUrl}?serviceKey=${url.serviceKey}&type=${url.type}&pageNo=${url.pageNo}&numOfRows=${url.numOfRows}`)).data.response.body.items.item
    // console.log(response);
    let copyMountains = [...response]
    setMountains(copyMountains)
    return 
  }
  function handleMoreBtnClick() {
    setCount(count+1)
    getMountains()
  }

  return(
    <div>
      <Nav/>
      <header className='main-header'/>
      <Section 
        count={count} 
        setCount={setCount}
        mountains={mountains}
        setMountains={setMountains}
        handleMoreBtnClick={handleMoreBtnClick}
      />
      <Footer/>
    </div>
  )
}

export default App


/*

24341c1e87d5ddd2030f25d02fbac2ea



*/