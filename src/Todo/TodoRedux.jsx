import React, { useState } from 'react'
import { addTodo } from '../redux/reducers'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function TodoRedux() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [task, setTask] = useState("")
    const handleSubmit = () =>{
        dispatch(addTodo(task))
        navigate('/todos')
    }
  return (
    <div>
        
       
        <h1>Todo</h1>
        <form onSubmit={e => e.preventDefault()} className="todo-redux">
            <input type="text" name="task" placeholder="Add a task" onChange={(e)=>setTask(e.target.value)} className='shadow' style={{padding:"10px",minHeight:"30px",minWidth:"300px", border:"none", borderRadius:"20px"}}/>
            <Button className='m-3' variant='success' onClick={handleSubmit}>ADD TASK</Button>
        </form>


    </div>
  )
}

export default TodoRedux