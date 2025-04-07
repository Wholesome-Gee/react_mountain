import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './components/detail/Detail.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path=':mtnId' element={<Detail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
)
