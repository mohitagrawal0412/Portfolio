import { configureStore } from "@reduxjs/toolkit";
import skillsReducer from "./reducer/skillReducer";

const store = configureStore({
  reducer: {
    skills: skillsReducer,
  },
});

export default store;
