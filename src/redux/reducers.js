import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState : [
        {
            id:1, title : "learn redux", completed:false}
    ],
    reducers:{
        addTodo : (state, action) =>{                           
            return [
                ...state ,{
                    id : state.length + 1,
                    title : action.payload,
                    completed:false
                }              
                    
            ]
        },
        deleteTodo :(state,action)=>{
            const newArr=state.filter(item=> item.id !== action.payload);
            return newArr;
        },
        updateTodo:(state,action)=>{
            const index =  state.map((tasks)=> tasks.id === action.payload.id ? {...tasks,title:action.payload.title}: tasks)
            return index
        },
        completed  : (state, action) =>{
            const index = state.map((item)=> item.id === action.payload ? {...item, completed:!item.completed}: item)
            return index
        }
    }
})

export default todoSlice.reducer;
export const  {addTodo, deleteTodo, updateTodo, completed } = todoSlice.actions