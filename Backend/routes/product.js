const express=require('express');
const router=express.Router();

const{auth,isTrainer,isMember}=require('../Middleware/auth');
const{createProduct,getProducts,getProduct}=require('../controller/Product')
router.post('/createProduct',auth,isTrainer,createProduct);
router.get('/products',getProducts);
router.get('/product/:id',getProduct);

module.exports=router;