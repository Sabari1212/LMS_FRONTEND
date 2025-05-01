import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slice/userSlice";

const store=configureStore({
    reducer:{
        userInfo:reducer
    }
})

export default store