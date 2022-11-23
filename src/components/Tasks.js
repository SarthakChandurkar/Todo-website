import React from 'react'
import ShowTodo from './ShowTodo'
import { useDispatch,useSelector } from 'react-redux'
import { fetchAllTodos, getErrorTodos, getStatusTodos, selectAllTodos } from '../todos/todoSlice'

const Tasks = () => {
    return (
        <>
            <ShowTodo categeory="Tasks" />
        </>
    )
}

export default Tasks