import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./skillsSlice";

const store = configureStore({
  reducer: {
    skills: skillsReducer,
  },
});

export default store;
