import './index.css'
import Navbar from './components/common/Navbar';
import Auth from './pages/Auth'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

import Program from './components/core/programs/Program';
import Shop from './pages/Shop'
import SendOTP from './pages/SendOTP';
import { useDispatch } from 'react-redux';
import { setSignupData } from './reducer/slices/userSlice';
function App() {
  const data='how are you';
  useDispatch(setSignupData(data));
  return (
    <div className='w-screen  flex-col relative p-0 m-0'>
      <Navbar/>
      <div className='h-[60px]'></div>
      <Routes>
        <Route path='/login' element={<Auth/>}></Route>
        <Route path='/signup' element={<Auth/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/program' element={<Program/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/send-otp' element={<SendOTP/>}></Route>
      </Routes>
     
      
      
      
      

    </div>
  );
}

export default App;
