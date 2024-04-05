import { combineReducers } from "@reduxjs/toolkit";

import userReducer from './slices/userSlice'
import dropDownReducer from './slices/DropMenu'
const rootReducer=combineReducers({
    user:userReducer,
    dropMenu:dropDownReducer
    
})

export default rootReducer;