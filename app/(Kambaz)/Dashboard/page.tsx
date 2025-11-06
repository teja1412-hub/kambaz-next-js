/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import {RootState} from "../store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { enrollCourse, unenrollCourse } from "../Enrollments/reducer";
import {
  Row,
  Col,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Card,
  FormControl,
} from "react-bootstrap";

export default function Dashboard() {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const enrollmentsState = useSelector(
    (state: any) => state.enrollmentsReducer.enrollments
  );

  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0",
    title: "New Course",
    code: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    semester: "Spring 2026:",
    image: "/images/reactJs.png",
    description: "New Description",
  });

  if (!currentUser) {
    // If currentUser is not available, show loading or fallback state
    return <div>Seems you have been logged out! Please signIn again.</div>;
  }
  
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser?.role === "FACULTY" && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0">New Course</h5>
            <div className="d-flex gap-2">
              <Button
                className="btn btn-warning"
                onClick={() => dispatch(updateCourse(course))}
              >
                Update
              </Button>
              <Button
                className="btn btn-primary"
                onClick={() => dispatch(addNewCourse(course))}
              >
                Add
              </Button>
            </div>
          </div>

          <FormControl
            value={course.title}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, title: e.target.value })}
          />
          <FormControl
            value={course.description}
            as="textarea"
            rows={3}
            className="mb-2"
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <br />
          <hr />
          <br />
        </>
      )}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 id="wd-dashboard-published">
          {" "}
          Published Courses
          {showAllCourses
            ? ` (${courses.length})`
            : ` (${
                courses.filter((c: any) =>
                  enrollmentsState.some(
                    (e: any) => e.user === currentUser._id && e.course === c._id
                  )
                ).length
              })`}
        </h2>

        <Button
          variant={showAllCourses ? "success" : "primary"}
          onClick={() => setShowAllCourses(!showAllCourses)}
          id="wd-enrollments-toggle"
        >
          Enrollments
        </Button>
      </div>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} lg={4} className="g-4">
          {(showAllCourses
            ? courses
            : courses.filter((course: any) =>
                enrollmentsState.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                )
              )
          ).map((course: any) => (
            <Col
              className="wd-dashboard-course"
              key={course._id}
              style={{ width: "340px" }}
            >
              <Card>
                <CardImg
                  variant="top"
                  src={course.image}
                  alt={course.title}
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.code} {course.title}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "50px" }}
                  >
                    {course.semester} : {course.description}
                  </CardText>

                  {/* Top row: Go (left) + Update/Delete buttons (right) */}
                  <div className="d-flex justify-content-between mb-2">
                    {/* Go button (left-aligned) */}
                    <Link href={`/Courses/${course._id}/Home`}>
                      <Button variant="primary">Go</Button>
                    </Link>

                    {/* Update/Delete buttons (right-aligned for faculty) */}
                    {currentUser?.role === "FACULTY" && (
                      <div className="d-flex gap-2">
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(deleteCourse(course._id));
                          }}
                          className="btn btn-danger"
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Bottom row: Enroll/Unenroll (left-aligned) */}
                  <div className="d-flex justify-content-start mt-2">
                    {showAllCourses &&
                      (enrollmentsState.some(
                        (e: any) =>
                          e.user === currentUser._id && e.course === course._id
                      ) ? (
                        <Button
                          variant="danger"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(
                              unenrollCourse({
                                user: currentUser._id,
                                course: course._id,
                              })
                            );
                          }}
                        >
                          Unenroll
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          onClick={(event) => {
                            event.preventDefault();
                            dispatch(
                              enrollCourse({
                                user: currentUser._id,
                                course: course._id,
                              })
                            );
                          }}
                        >
                          Enroll
                        </Button>
                      ))}
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
