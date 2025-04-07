import axios from 'axios'
import { useEffect, useState } from 'react'
import Nav from './components/nav/Nav'
import Section from './components/section/Section'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [mountains, setMountains] = useState([])
  const [allMountains, setAllMountains] = useState([])
  const [count, setCount] = useState(1)
  const [sort, setSort] = useState('name')
  // const [numOfRows, setNumOfRows] = useState(6)
  let url = {
    baseUrl : 'https://apis.data.go.kr/B553662/top100FamtListBasiInfoService',
    subUrl : 'getTop100FamtListBasiInfoList',
    serviceKey : import.meta.env.VITE_HUNDREDMOUNT_KEY_,
    type : 'json',
    numOfRows : 20 * count, // 한번에 보여줄 산 개수
    pageNo : 1, 
  }
  
  useEffect(()=>{
    if(allMountains.length>0){
      let mountains = allMountains.slice(0,url.numOfRows)
      setMountains(mountains)
    } else {
      getAllMountains()
    }
    // console.log(1);
  },[count,sort])
  

  let getAllMountains = async () => {
    let response = (await axios.get(`${url.baseUrl}/${url.subUrl}?serviceKey=${url.serviceKey}&type=${url.type}&numOfRows=100`)).data.response.body.items.item
    // console.log(3);
    let sortedAllMountains = sort === 'height' ? [...response].sort((a,b)=>-(a.aslAltide - b.aslAltide)) : [...response]
    setAllMountains(sortedAllMountains)
    let mountains = sortedAllMountains.slice(0,url.numOfRows)
    setMountains(mountains)
  }

  function 이름순정렬() {
    let sortedMountains = [...allMountains].sort((a,b)=> {
      return a.frtrlNm > b.frtrlNm ? 1 : -1;
    })
    setAllMountains(sortedMountains)
    setSort('name')
  }
  function 높이순정렬() {
    let sortedMountains = [...allMountains].sort((a,b)=> -(a.aslAltide - b.aslAltide))
    setAllMountains(sortedMountains)
    setSort('height')
  }

  return(
    <div>
      <Nav/>
      <Section 
        count={count} 
        setCount={setCount}
        mountains={mountains}
        setMountains={setMountains}
        allMountains={allMountains}
        getAllMoutains={getAllMountains}
        sort={sort}
        numOfRows={url.numOfRows}
        이름순정렬={이름순정렬}
        높이순정렬={높이순정렬}
      />
      <Footer/>
      <Outlet/>
    </div>
    
  )
}

export default App