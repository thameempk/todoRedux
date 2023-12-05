import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoRedux from './Todo/TodoRedux';
import ToDoList from './Todo/ToDoList';
import Home from './Todo/Home';
function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createtodo' element={<TodoRedux />} />
        <Route path='todos' element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default App;
