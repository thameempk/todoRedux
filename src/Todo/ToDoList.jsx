import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, updateTodo, completed } from '../redux/reducers'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function ToDoList() {
    const value = useSelector((state)=>state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [task, setTask] = useState("")
    const [edit, setEdit] = useState(null)
    const update = () =>{
        dispatch(updateTodo({title: task.title,id: task.id}))
        setEdit(null)
    }
  return (
    <div className='container mt-5' style={{backgroundColor:"grey", borderRadius:"20px"}}>
        
        {value.map((tasks)=>(
            tasks.id === edit ? (
                <div key={tasks.id}>
                    <input type="text"  onChange={(e)=>setTask({title:e.target.value,id: tasks.id})} className='shadow' style={{padding:"10px",minHeight:"30px",minWidth:"300px", border:"none", borderRadius:"20px"}}/>
                    <Button variant='dark' className='m-3' onClick={update}>update</Button>
                </div>
               
            ): (
                <div  key={tasks.id} className='m-3' style={{backgroundColor:"InfoBackground", marginTop:"10px", borderRadius:"20px", overflow:"hidden"}}>
                <span  onClick={()=>dispatch(completed(tasks.id))} style={{fontSize:"20px", fontWeight:"600", textDecoration: tasks.completed ? "line-through" : "none", opacity: tasks.completed ? ".6" : "1"}}>{tasks.title}</span>
                <MdDelete style={{fontSize:"20px"}} className='m-2' onClick={()=>dispatch(deleteTodo(tasks.id))}/>
                <FaEdit style={{fontSize:"20px"}} onClick={()=>setEdit(tasks.id)}/>
                
                </div>
            )

            
        ))}
        <Button variant='success' className='m-3' onClick={()=>navigate('/createtodo')}>Add ToDo</Button>
    </div>
  )
}

export default ToDoList