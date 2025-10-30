"use client";

import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import { Button } from "react-bootstrap";
import Breadcrumb from "./Breadcrumb";

interface Course {
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

interface RootState {
  coursesReducer: CoursesState;
}

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams<{ cid: string }>();
  const courses = useSelector((state: RootState) => state.coursesReducer.courses);
  const course = courses.find((c) => c._id === cid);

  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div id="wd-courses">
      <div className="d-flex align-items-center">
        <Button
          variant="link"
          onClick={() => setShowSidebar(!showSidebar)}
          className="text-danger fs-3 me-3 p-0 border-0"
          aria-label="Toggle Navigation"
        >
          <FaAlignJustify />
        </Button>

        <h2> <Breadcrumb course={course} /> </h2>
      </div>

      <hr />

      <div className="d-flex">
        {showSidebar && (
          <div className="me-3" style={{ minWidth: "220px" }}>
            <CourseNavigation cid={cid} />
          </div>
        )}

        <div className="flex-fill">{children}</div>
      </div>
    </div>
  );
}
