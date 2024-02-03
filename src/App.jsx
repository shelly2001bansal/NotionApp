
import './App.css'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import { useState } from 'react'
import PrivateRoute from './components/PrivateRoute'
function App() {
  const [logIn,setLogIn]=useState(false);

  return (
    <div className='container'>
    
    <Navbar logIn={logIn} setLogIn={setLogIn}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setLogIn={setLogIn}/>}/>
        <Route path="/signup" element={<SignUp setLogIn={setLogIn}/>}/>
        <Route path="/dashboard" element={<PrivateRoute logIn={logIn}><Dashboard/></PrivateRoute>}/>

      </Routes>
    </div>
  )
}

export default App
