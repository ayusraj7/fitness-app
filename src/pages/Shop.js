import React from 'react'
import Classes from '../components/core/shop/Classes'
import Products from '../components/core/shop/Products'
import Footer from '../components/common/Footer'
const Shop = () => {
  return (
    <div className='bg-black'>
        <Classes/>
        <Products/>
        <Footer/>
    </div>
  )
}

export default Shop