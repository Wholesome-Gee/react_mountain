import './Nav.css'

function Nav() {
  return (
    <nav className='nav-bar'>
        <div className='inner'>
          <a className="nav-bar_login" href="/">로그인</a>
          {/* <a className="nav-bar_notice" href="/">공지사항</a> */}
        </div>
      </nav>
  )
}

export default Nav