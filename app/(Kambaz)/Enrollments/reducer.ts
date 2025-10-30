/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Enrollment {
  user: string;
  course: string;
}

interface EnrollmentsState {
  enrollments: Enrollment[];
}

const savedEnrollments = typeof window !== "undefined"
  ? localStorage.getItem("enrollments")
  : null;

import * as db from "../Database"; 
const initialState: EnrollmentsState = {
  enrollments: savedEnrollments
    ? JSON.parse(savedEnrollments)
    : db.enrollments,
};


const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, action: PayloadAction<Enrollment>) => {
      state.enrollments.push(action.payload);
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
    unenrollCourse: (state, action: PayloadAction<Enrollment>) => {
      state.enrollments = state.enrollments.filter(
        (e) =>
          !(e.user === action.payload.user && e.course === action.payload.course)
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments));
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
