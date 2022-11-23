import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const base_url = "https://todo-api-9ice.onrender.com"
const initialState = {
    todos: [],
    status:'idle',
    error:'null'
}



export const fetchAllTodos = createAsyncThunk("todos/fetchAllTodos", async () => {
    const response = await axios.get(base_url)
    console.log("thunk",response.data)
    return [...response.data]
})

export const addNewTodo = createAsyncThunk("todos/addNewTodo", async(newTodo)=>{
    const response = await axios.post(base_url,newTodo)
    console.log(response.data)
    return [...response.data]
})

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id)=>{
    const response = await axios.delete(`${base_url}/${id}`)
    console.log(response.data)
    return [...response.data]
})

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        todoAdded:{
            reducer(state,action){
                state.todos.push(action.payload)
            }
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAllTodos.fulfilled, (state, action) => {
                const toSet = action.payload
                state.todos = toSet
            })
            .addCase(fetchAllTodos.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchAllTodos.rejected, (state, action) => {
                state.status = "rejected"
                state.error = action.error.message
            })
            .addCase(addNewTodo.fulfilled,(state,action)=>{
                const toSet = action.payload
                state.todos = state.todos.push(toSet)
            })
            .addCase(deleteTodo.fulfilled,(state,action)=>{
                const toSet = action.payload
                state.todos = state.todos.filter((item)=>item._id!==toSet)
            })
    }
})


export const { todoAdded } = todoSlice.actions
export const getStatusTodos = (state) => state.todos.status
export const getErrorTodos = (state) => state.todos.error
export const selectAllTodos = (state) => state.todos.todos
export default todoSlice.reducer
