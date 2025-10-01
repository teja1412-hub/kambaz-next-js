import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <ModuleControlButtons />
            <BsGripVertical className="me-2 fs-3" /> Week 1, Lecture 1 - Course
            Introduction, Syllabus, Agenda
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Introduction to the
              course
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Learn what is Web
              Development
            </ListGroupItem>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> READING{" "}
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Full Stack Developer -
              Chapter 1 - Introduction
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Full Stack Developer -
              Chapter 2 - Creating User Interface
            </ListGroupItem>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> SLIDES{" "}
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Introduction to Web
              Development
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Creating an HTTP server
              with Node.js
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Creating a React
              Application
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <ModuleControlButtons />
            <BsGripVertical className="me-2 fs-3" /> Week 2, Lecture 2 -
            Formatting User Interface with HTML
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Learn how to create user
              interface with HTML
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Deploy the assignment to
              Netlify
            </ListGroupItem>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> READING{" "}
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Full Stack Developer -
              Chapter 2 - Building User Interface using React HTML
            </ListGroupItem>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> SLIDES{" "}
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Implementing Kambaz
              Account Screens
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Implementing Kambaz
              Dashboard Screens
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Implementing Kambaz
              Modules Screens
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
        <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <ModuleControlButtons />
            <BsGripVertical className="me-2 fs-3" /> Week 3, Lecture 3 - Styling
            web pages with CSS
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Intoduction to CSS
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> The box model - styling
              margins, borders and padding
            </ListGroupItem>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> READING{" "}
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Full Stack Developer -
              Chapter 3 - Styling web pages with CSS
            </ListGroupItem>
          </ListGroup>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> SLIDES{" "}
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Introduction to CSS
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> The box model
            </ListGroupItem>
            <ListGroupItem className="wd-lesson p-3 ps-1">
              <LessonControlButtons />
              <BsGripVertical className="me-2 fs-3" /> Rotating content and
              gradient background
            </ListGroupItem>
          </ListGroup>
        </ListGroupItem>
      </ListGroup>
    </div>
  );
}
