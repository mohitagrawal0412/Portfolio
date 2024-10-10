import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./reducer/skillReducer.js";

const store = configureStore({
  reducer: {
    skills: skillsReducer,
  },
});

export default store;
