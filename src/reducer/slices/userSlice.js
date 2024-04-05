import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:'User',
    initialState:{
        token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null,
        signupData:null,
        loading:false,
        userData:localStorage.getItem("userData")?JSON.parse(localStorage.getItem("userData")):null,
    },
    reducers:{
        setSignupData(state,value){
            state.signupData=value.payload;
        },
        setLoading(state,value){
            state.loading=value.payload;
        },
        setToken(state,value){
            state.token=value.payload;
        },
        setUserData(state,value){
            state.userData=value.payload;
        }
    }
})

export const {setSignupData,setLoading,setToken,setUserData}=userSlice.actions;
export default userSlice.reducer;