/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState, useCallback } from "react";
import { RootState } from "../store";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setCourses } from "../Courses/reducer";
import { setEnrollments } from "../Enrollments/reducer";
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
import * as client from "../Courses/client";
import * as enrollClient from "../Enrollments/client";

export default function Dashboard() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as {currentUser: any};;
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
  const fetchCourses = useCallback(async () => {
    try {
      const courses = await client.findMyCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const fetchAllCoursesFromServer = useCallback(async () => {
    const courses = await client.fetchAllCourses();
    dispatch(setCourses(courses));
  }, [dispatch]);

  const onAddNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    dispatch(setCourses([...courses, newCourse]));
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course) => course._id !== courseId)));
  };

  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      )
    );
  };

  const fetchEnrollments = useCallback(async () => {
    const data = await enrollClient.fetchEnrollments();
    dispatch(setEnrollments(data));
  }, [dispatch]);

  const onEnrollCourse = async (courseId: string) => {
    await enrollClient.enrollUser(courseId);
    fetchEnrollments();
  };

  const onUnenrollCourse = async (courseId: string) => {
    await enrollClient.unenrollUser(courseId);
    fetchEnrollments();
  };

  useEffect(() => {
    if (!currentUser) return;
    fetchEnrollments();

    if (showAllCourses) {
      fetchAllCoursesFromServer();
    } else {
      fetchCourses();
    }
  }, [showAllCourses,
    fetchCourses,
    fetchEnrollments,
  ]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser?.role === "FACULTY" && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5 className="mb-0">New Course</h5>
            <div className="d-flex gap-2">
              <Button className="btn btn-warning" onClick={onUpdateCourse}>
                Update
              </Button>
              <Button className="btn btn-primary" onClick={onAddNewCourse}>
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
          {` (${courses.length})`}
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
          {courses.map((currentCourse: any) => (
            <Col
              className="wd-dashboard-course"
              key={currentCourse._id}
              style={{ width: "340px" }}
            >
              <Card>
                <CardImg
                  variant="top"
                  src={currentCourse.image}
                  alt={currentCourse.title}
                  width="100%"
                  height={160}
                />
                <CardBody>
                  <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {currentCourse.code} {currentCourse.title}
                  </CardTitle>
                  <CardText
                    className="wd-dashboard-course-description overflow-hidden"
                    style={{ height: "50px" }}
                  >
                    {currentCourse.semester} : {currentCourse.description}
                  </CardText>

                  {/* Top row: Go (left) + Update/Delete buttons (right) */}
                  <div className="d-flex justify-content-between mb-2">
                    {/* Go button (left-aligned) */}
                    <Link href={`/Courses/${currentCourse._id}/Home`}>
                      <Button variant="primary">Go</Button>
                    </Link>

                    {/* Update/Delete buttons (right-aligned for faculty) */}
                    {currentUser?.role === "FACULTY" && (
                      <div className="d-flex gap-2">
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(currentCourse);
                          }}
                          className="btn btn-warning"
                        >
                          Edit
                        </Button>
                        <Button
                          onClick={(event) => {
                            event.preventDefault();
                            onDeleteCourse(currentCourse._id);
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
                          e.user === currentUser._id && e.course === currentCourse._id
                      ) ? (
                        <Button
                          variant="danger"
                          onClick={() => onUnenrollCourse(currentCourse._id)}
                        >
                          Unenroll
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          onClick={() => onEnrollCourse(currentCourse._id)}
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
