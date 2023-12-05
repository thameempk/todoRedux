import { Button } from 'react-bootstrap';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  return (
    <div>
        <Button className='m-5' variant='success' style={{marginTop:"300px"}} onClick={()=>navigate('/createtodo')}>Add ToDo</Button>
        <Button className='m-5' variant='success' style={{marginTop:"300px"}} onClick={()=>navigate('/todos')}>ToDo List</Button>
    </div>
  )
}

export default Home