import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { courses as initialCourses } from "../Database";
import { v4 as uuidv4 } from "uuid";

export interface Course {
  _id: string;
  code: string;
  title: string;
  semester?: string;
  startDate?: string;
  endDate?: string;
  image?: string;
  description?: string;
}

interface CoursesState {
  courses: Course[];
}

const initialState: CoursesState = {
  courses: initialCourses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state, action: PayloadAction<Course>) => {
      const newCourse: Course = { ...action.payload, _id: uuidv4() };
      state.courses.push(newCourse);
    },

    deleteCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter(
        (course) => course._id !== action.payload
      );
    },

    updateCourse: (state, action: PayloadAction<Course>) => {
      const updatedCourse = action.payload;
      state.courses = state.courses.map((c) =>
        c._id === updatedCourse._id ? updatedCourse : c
      );
    },
  },
});

export const { addNewCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
