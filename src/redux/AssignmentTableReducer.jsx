import { createSlice } from "@reduxjs/toolkit";

const data=[
    {
    Sno: 1,
    assignmentTitle: 'Assignment 1',
    assignmentDescription:'This is the first assignment',
    assignmentDueDate:'2024-08-12'
  },

  {
    Sno: 2,
    assignmentTitle: 'Assignment 2',
    assignmentDescription:'This is the first assignment',
    assignmentDueDate:'2024-08-12'
  },
  {
    Sno: 3,
    assignmentTitle: 'Assignment 3',
    assignmentDescription:'This is the first assignment',
    assignmentDueDate:'2024-08-12'
  }
]
const assignmentTableSlice=createSlice({
    name:'assignmentTable',
    initialState:data,
    reducers:{
        addAssignment:(state,action)=>{
            state.push({...action.payload})

        },
        removeAssignment:(state,action)=>{

        },
        updateAssignment:(state,action)=>{

        }
    }
    
})
export const{addAssignment,removeAssignment,updateAssignment}=assignmentTableSlice.actions
export default assignmentTableSlice.reducer;