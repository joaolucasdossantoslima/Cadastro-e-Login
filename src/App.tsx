import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Cadastro from './components/Cadastro/Cadastro'
import Login from './components/Login/Login'
import './App.css'
function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Cadastro' element={<Cadastro/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </Router>
  )
    
}

export default App
