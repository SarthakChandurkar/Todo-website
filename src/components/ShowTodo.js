import React,{useState,useEffect} from 'react'
import Todo from './Todo'
import { fetchAllTodos,getStatusTodos,getErrorTodos,addNewTodo } from '../todos/todoSlice'
import { useSelector,useDispatch } from 'react-redux'
import { selectAllTodos } from '../todos/todoSlice'


const ShowTodo =  ({categeory}) => {
    const dispatch = useDispatch()
    const todosState = getStatusTodos
    const error = getErrorTodos
    useEffect(()=>{
        if(todosState==='idle'){
            dispatch(fetchAllTodos())
        }
    },[todosState,dispatch])
    const myTodos= useSelector(selectAllTodos)
    const [inputTodo,setInputTodo] = useState("")
    const handleSubmit = async (e)=>{
        if(inputTodo===""){
            return;
        }
        e.preventDefault();
        await dispatch(addNewTodo({
            todo:inputTodo
        }))
        setInputTodo("")
        await dispatch(fetchAllTodos())
    }
    const handleInputTodo = (e) =>{
        setInputTodo(e.target.value)
    }
  return (
    <>
        <div className="showTodo">
            <h3 className='headingTodo'>{categeory}</h3>
            <div className="todo-container">
                {myTodos.map((item)=><Todo title={item.todo} id={item._id} key={item._id} />)}
            </div>
            {categeory==="Tasks"?null:<div className="addTodo"><form onSubmit={handleSubmit} ><input type="text" id="todoinput" maxLength={100} minLength={1} size={58.9} value={inputTodo} onChange={handleInputTodo}
            /><span><button type="submit">+</button></span></form></div>}
        </div>
    </>
  )
}

export default ShowTodo