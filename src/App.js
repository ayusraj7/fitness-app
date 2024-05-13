import './index.css'
import Navbar from './components/common/Navbar';
import Auth from './pages/Auth'
import {useSelector} from 'react-redux'
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
import Profile from './components/core/dashboard/Profile'
import { useDispatch } from 'react-redux';
import { setSignupData } from './reducer/slices/userSlice';
import SingleBlog from './pages/SingleBlog';
import Dashboard from './pages/Dashboard';
import MyBlog from './components/core/dashboard/MyBlog';
import AddClass from './components/core/dashboard/AddClass';
import AddBlog from './components/core/dashboard/AddBlog';
import AddProduct from './components/core/dashboard/AddProduct';
import CAndP from './components/core/dashboard/CAndP';
import Cart from './components/core/dashboard/Cart';
import Settings from './components/core/dashboard/Settings'
import PurchasedItems from './components/core/dashboard/PurchasedItems';
import EnrolledClasses from './components/core/dashboard/EnrolledClasses';
import SingleClass from './pages/SingleClass';

function App() {
  const navigate=useNavigate();

  const{userData,token}=useSelector(state=>state.user);
  console.log('userData',userData);
  const id=userData?._id;
  console.log('ayush',process.env.REACT_APP_BACKEND_URL);
  

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
        <Route path='/blogs/:id?' element={<Blogs/>}></Route>
        <Route path='/blog/:id' element={<SingleBlog/>}></Route>
        <Route path='/product/:id' element={<SingleProduct/>}></Route>
        <Route path='/class/:id' element={<SingleClass/>}></Route>
       
        <Route element={<Dashboard/>}>

        <Route path='/dashboard/profile' element={<Profile/>}/>
        <Route path='/dashboard/dashboard' element={<Profile/>}/>
        <Route path='/dashboard/classes-products' element={<CAndP/>}/>
        <Route path='/dashboard/blogs/:id?' element={<MyBlog/>}/>
        <Route path='/dashboard/addClass' element={<AddClass/>}/>
        <Route path='/dashboard/addProduct' element={<AddProduct/>}/>
        <Route path='/dashboard/addBlog' element={<AddBlog/>}/>

        <Route path='/dashboard/cart' element={<Cart/>}/>
        <Route path='/dashboard/settings' element={<Settings/>}/>
        <Route path='/dashboard/purchased-items' element={<PurchasedItems/>}/>
        <Route path='/dashboard/enrolled-classes' element={<EnrolledClasses/>}/>

        </Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      
     
      
      
      
      

    </div>
  );
}

export default App;
