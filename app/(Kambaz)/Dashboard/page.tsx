/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {useState} from "react";
import Link from "next/link";
import * as db from "../Database";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
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
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
    const [course, setCourse] = useState<any>({
    _id: "0", title: "New Course", code: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", semester: "Spring 2026:",
    image: "/images/reactJs.png", description: "New Description"
  });
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
          <Button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={() => dispatch(addNewCourse(course))} >
 Add </Button>
          <Button className="btn btn-warning float-end me-2"
            onClick={() => dispatch(updateCourse(course))} >
            Update </Button>
      </h5><hr /><br />
      <FormControl value={course.title} className="mb-2" 
                   onChange={(e) => setCourse({ ...course, title: e.target.value }) } />

      <FormControl value={course.description} as="textarea" rows={3} className="mb-2"
                   onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      <br/>
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
      {courses
          .filter((course: any) =>
            enrollments.some(
              (enrollment) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
              ))
      .map((course: any) => (
    <Col className="wd-dashboard-course" key={course._id} style={{ width: "300px" }}>
      <Card>
        <Link
          href={`/Courses/${course._id}/Home`}
          className="wd-dashboard-course-link text-decoration-none text-dark"
        >
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
            <Button variant="primary"> Go </Button>
            <Button onClick={(event) => {
                      event.preventDefault();
                      dispatch(deleteCourse(course._id));
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
            </Button>
            <Button id="wd-edit-course-click"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}
              className="btn btn-warning me-2 float-end" >
              Edit
            </Button>
          </CardBody>
        </Link>
      </Card>
    </Col>
  ))}
</Row>

      </div>
    </div>
  );
}
