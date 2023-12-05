import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name : 'todo',
    initialState : [
        {id:1, title : "learn redux"}
    ],
    reducers:{
        addTodo : (state, action) =>{
            return [
                ...state ,{
                    id : state.length + 1,
                    title : action.payload
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
        }
    }
})

export default todoSlice.reducer;
export const  {addTodo, deleteTodo, updateTodo } = todoSlice.actions