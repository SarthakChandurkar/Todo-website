import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../todos/todoSlice"
const store = configureStore({
    reducer:{
        todos:todosReducer
    },
    devTools:false
})

export default store