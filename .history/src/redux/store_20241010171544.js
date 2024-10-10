import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./index/";

const store = configureStore({
  reducer: {
    skills: skillsReducer,
  },
});

export default store;
