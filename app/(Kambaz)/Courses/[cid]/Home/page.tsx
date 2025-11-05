/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSelector } from "react-redux";
import Modules from "../Modules/page";
import CourseStatus from "./Status";
import { RootState } from "../../../store";

export default function Home() {
  const router = useRouter();
  const params = useParams();
  const courseId = params?.cid as string;

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector((state: RootState) => state.enrollmentsReducer.enrollments);

  // Check if current user is enrolled in this course
  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser?._id &&
      enrollment.course === courseId
  );

  // Redirect unauthorized users back to dashboard
  useEffect(() => {
    if (!isEnrolled) {
      router.push("/Dashboard");
    }
  }, [isEnrolled, router]);

  if (!isEnrolled) {
    return null; // prevents flash before redirect
  }

  return (
    <div id="wd-home">
      <div className="d-flex" id="wd-home">
        <div className="flex-fill me-3">
          <Modules />
        </div>
        <div className="d-none d-lg-block">
          <CourseStatus />
        </div>
      </div>
    </div>
  );
}
