import { configureStore } from "@reduxjs/toolkit";
import AssignmentTableReducer from "./AssignmentTableReducer";

const store=configureStore({
    reducer:AssignmentTableReducer
});
export default store;