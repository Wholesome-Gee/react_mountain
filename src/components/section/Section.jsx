import { FaSearch } from 'react-icons/fa'
import Card from '../card/Card'
import './Section.css'

function Section({count, setCount, mountains, setMountains, handleMoreBtnClick}) {

  return (
    <section className='main-section'>
        <div className="inner">
          <form className='search'>
            <input className='search_input' type="text" placeholder='검색어를 입력하세요.' />
            <button className='search_btn'><FaSearch className='search_btn_icon' /></button>
          </form>
          <ul className="sort-btns">
            <button className='sort_btn'>이름순</button>
            <button className='sort_btn'>높이순</button>
          </ul>
          <div className="cards">
            {
              mountains.map((mountain)=> <Card mountain={mountain} setMountains={setMountains} key={mountain.frtrlId}/>)
            }
            
          </div>
          <button className="btn-more" onClick={handleMoreBtnClick}>더 보기</button>
        </div>
      </section>
  )
}

export default Section