import './index.css'
import Navbar from './components/common/Navbar';
import Auth from './pages/Auth'
import {Routes,Route, Navigate, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Program from './pages/Program';
import Shop from './pages/Shop'
import SendOTP from './pages/SendOTP';
import Blogs from './pages/Blogs'
import Modal from './components/common/Modal'
import Error from './pages/Error'
import SingleProduct from './pages/SingleProduct'

import { useDispatch } from 'react-redux';
import { setSignupData } from './reducer/slices/userSlice';
import SingleBlog from './pages/SingleBlog';

function App() {
  const navigate=useNavigate();
  
  
  const data={
    "text1":"You are not logged in",
    "text2":"Please Login to add To Cart",
   
  }
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
        <Route path='/blogs' element={<Blogs/>}></Route>
        <Route path='/blog/:id' element={<SingleBlog/>}></Route>
        <Route path='/product/:id' element={<SingleProduct/>}></Route>
        <Route path='/modal' element={<Modal data={data}  />}/>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      
     
      
      
      
      

    </div>
  );
}

export default App;
