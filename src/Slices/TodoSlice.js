import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const TodoSlice = createSlice({
    name: 'todo',
    initialState: [
        {
            id: uuidv4(),
            title: 'Reactproject',
            description: 'Complete React project',
            isDone: false,
        },
        {

            id: uuidv4(),
            title: 'Redux',
            description: 'Learn Redux',
            isDone: false,
        },

    ],
    reducers: {
        add: (state, action) => [...state, { description: action.payload }] ,

        chekdone: (state, action)=>state.map((task) => (task.id ===action.payload) ? { ...task, isDone: !task.isDone } : task),
        update:(state,action)=>state.map((l,i)=>(l.id===action.payload.id)?{...state,description:action.payload.up}:l),
      
       
    }
})
export default TodoSlice.reducer
export const { add } = TodoSlice.actions
export const { chekdone } = TodoSlice.actions 
export const{update}=TodoSlice.actions 
export const {remove}=TodoSlice.actions 
