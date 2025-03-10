import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login/Login.jsx'
import Detail from './detail/Detail.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='login' element={<Login/>}/>
        <Route path=':mtnId' element={<Detail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
)
