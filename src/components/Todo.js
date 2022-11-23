import React,{useState} from 'react'
import {useDispatch } from 'react-redux'
import { deleteTodo, fetchAllTodos} from '../todos/todoSlice'

const Todo = ({title,id}) => {
  const dispatch = useDispatch()
  const [myStyle,setMyStyle] = useState('none');

  const handleChecked = async () =>{
    if(myStyle==='none'){
      setMyStyle('line-through')
      await dispatch(deleteTodo(id))
      await dispatch(fetchAllTodos())
    }
    else{
      setMyStyle('none')
    }
  }
  return (
        <div className="todo" id='myText' style={{textDecoration:`${myStyle}`}}><span>{title}</span><span><input type="checkbox" name="myCheck" id="checked" onClick={handleChecked}/></span></div>
  )
}

export default Todo