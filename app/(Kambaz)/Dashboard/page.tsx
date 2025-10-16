import Link from "next/link";
import * as db from "../Database";
import Image from "next/image";
import {
  Row,
  Col,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Card,
} from "react-bootstrap";
export default function Dashboard() {
    const courses = db.courses;
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
  {courses.map((course) => (
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
              {course.code}_{course.semester} Semester
            </CardText>
            <Button variant="primary"> Go </Button>
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
