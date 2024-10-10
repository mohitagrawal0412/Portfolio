import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from ".";

const store = configureStore({
  reducer: {
    skills: skillsReducer,
  },
});

export default store;
