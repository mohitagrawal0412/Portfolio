import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./slice/";

const store = configureStore({
  reducer: {
    skills: skillsReducer,
  },
});

export default store;
