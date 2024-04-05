import { createSlice } from "@reduxjs/toolkit";
const dropDownSlice = createSlice({
    name:'DropDown',
    initialState:{
       
        show:false,

    },
    reducers:{
        setShowing(state,value){
            state.show=value.payload;
        },
       
    }
})

export const {setShowing}=dropDownSlice.actions;
export default dropDownSlice.reducer;