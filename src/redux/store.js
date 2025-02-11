import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice"; //Importing task slice
const store = configureStore({
  reducer: {
    tasksList: taskReducer, //register tasks reducer
  },
});

export default store;
