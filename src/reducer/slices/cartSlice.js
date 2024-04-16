import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:'Cart',
    initialState:{
        cartItems:localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[],
        total:localStorage.getItem('total')?JSON.parse(localStorage.getItem('total')):0,
        totalItems:localStorage.getItem('totalItems')?JSON.parse(localStorage.getItem('totalItems')):0,
    },
    reducers:{
        setSignupData(state,value){
            state.signupData=value.payload;
        },
        removeFromCart:(state,action)=>{
            
        },
        resetCart:(state)=>{
            state.cart=[]
            state.total=0
            state.totalItems=0
            localStorage.removeItem("cartItems")
            localStorage.removeItem("total")
            localStorage.removeItem("totalItems")
        }
    }
})

export const {removeFromCart,resetCart}=userSlice.actions;
export default userSlice.reducer;