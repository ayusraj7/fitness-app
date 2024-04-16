const express=require('express');
const router=express.Router();

const{auth,isTrainer,isMember}=require('../Middleware/auth');
const{createProduct,getProducts,getProduct,userProduct,instructorProduct}=require('../controller/Product')
router.post('/createProduct',auth,isTrainer,createProduct);
router.get('/products',getProducts);
router.get('/product/:id',getProduct);
router.post('/products/:id',auth,isTrainer,instructorProduct);
router.post('/member-products/:id',auth,isMember,userProduct)
module.exports=router;