import { createSlice } from "@reduxjs/toolkit";

const skillsSlice = createSlice({
  name: "skills",
  initialState: {
    backend: [
      { src: "path/to/backend/logo1.png", alt: "Backend Logo 1" },
      { src: "path/to/backend/logo2.png", alt: "Backend Logo 2" },
      // Add more backend technologies
    ],
    software: [
      { src: "path/to/software/logo1.png", alt: "Software Logo 1" },
      // Add more software technologies
    ],
    frontend: [
      { src: "path/to/frontend/logo1.png", alt: "Frontend Logo 1" },
      // Add more frontend technologies
    ],
    programming: [
      { src: "path/to/programming/logo1.png", alt: "Programming Logo 1" },
      // Add more programming technologies
    ],
  },
  reducers: {
    // You can add actions to modify skills if needed
  },
});

export const selectSkills = (state) => state.skills;
export default skillsSlice.reducer;
