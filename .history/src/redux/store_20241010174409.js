import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./slice/skillSlice.s";

const store = configureStore({
  reducer: {
    skills: skillsReducer,
  },
});

export default store;
