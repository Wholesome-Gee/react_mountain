import { FaSearch } from 'react-icons/fa'
import Card from '../card/Card'
import './Section.css'
import { useState } from 'react'

function Section({count, setCount, mountains, allMountains, setAllMountains, setMountains, sort, numOfRows, 이름순정렬, 높이순정렬}) {
  const [value, setValue] = useState('');
  const [noResult, setNoResult] = useState(false) // 인풋 검색결과 있으면 true, 없으면 false

  function handleMoreBtnClick() {
    setCount(count+1)
  }

  function handleChangeValue(e) {
    let keyword = e.target.value
    if((keyword==='')){
      let mountains = allMountains.slice(0,numOfRows)
      setNoResult(false);
      setMountains(mountains);
    }else {
      let filteredMountains = [...allMountains].filter(item => item.frtrlNm.startsWith(keyword));
      if(filteredMountains.length>0){
        setNoResult(false);
        setMountains(filteredMountains);
      } else {
        setNoResult(true);
      }
    }
    setValue(keyword)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(value!==''){
      let filteredMountains = mountains.filter(item => item.frtrlNm.startsWith(value));
      setMountains(filteredMountains);
    }
  }

  
  return (
    <>
      <header className='main-header'/>
      <section className='main-section'>
        <div className="inner">
          <form className='search' onSubmit={handleSubmit}>
            <input className='search_input' type="text" placeholder='산이름을 입력하세요.' value={value} onChange={handleChangeValue}/>
            <button className='search_btn'><FaSearch className='search_btn_icon' /></button>
          </form>
          {
            value ? 
              null :
              <ul className="sort-btns">
                <button 
                  className={`sort_btn-name ${sort==='name'&&'btn-highlight'}`}
                  onClick={이름순정렬}
                >
                  이름순
                </button>
                <button 
                  className={`sort_btn-height ${sort==='height'&&'btn-highlight'}`}
                  onClick={높이순정렬}
                >
                  높이순
                </button>
              </ul>
          }
          <div className="cards">
            {
              noResult ? <div className='no-card_message'>검색 결과가 없습니다.</div> :
              mountains.map((mountain,index)=> <Card mountain={mountain} setMountains={setMountains} index={index} key={mountain.frtrlId}/>)
            }
          </div>
          {
            noResult ? 
              null : 
              count===4 ? null : !value && <button className="btn-more" onClick={handleMoreBtnClick}>더 보기</button>
          }
          
        </div>
      </section>
    </>
  )
}

export default Section