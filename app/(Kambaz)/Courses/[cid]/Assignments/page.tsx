/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import SubAssignmentControlButtons from "./SubAssignmentControlButtons";
import AssignementControls from "./AssignmentControls";
import { useParams} from "next/navigation";
import { useSelector, useDispatch} from "react-redux";
import { deleteAssignment } from "./reducer";

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const date = new Date(dateString);
  return date.toLocaleString("en-US", options);
}

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );

  const courseAssignments = assignments.filter((a: any) => a.course === cid);
  const dispatch = useDispatch();

  return (
    <div id="wd-assignments-quizzes-exams-projects">
      <div id="wd-assignments">
        <AssignementControls />
        <br />
        <br />
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-2 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                ASSIGNMENTS
              </div>
              <div className="d-flex align-items-center">
                <p
                  className="wd-rounded-corners-all-around wd-border-thin wd-border-black wd-border-solid wd-percentage-box mb-0 me-3"
                  style={{ whiteSpace: "nowrap" }}
                >
                  40% of Total
                </p>
                <AssignmentControlButtons />
              </div>
            </div>

            <ListGroup className="wd-lessons rounded-0 ">
              {courseAssignments.map((assignment: any) => (
                <ListGroupItem
                  key={assignment._id}
                  className="wd-lesson px-3 ps-1"
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-start">
                      <BsGripVertical className="me-2 fs-3 mt-1" />
                      <FaRegFileAlt className="me-2 text-success fs-4 mt-1" />
                      <div>
                        <Link
                          href={`/Courses/${cid}/Assignments/${assignment._id}`}
                          className="wd-assignment-link"
                        >
                          {assignment.title}
                        </Link>
                        <br />
                        <span className="text-danger">Multiple Modules</span> |{" "}
                        <b>Not available until</b> {formatDate(assignment.availableFrom)} |{" "}
                        <br />
                        <b>Due</b> {formatDate(assignment.dueDate)} | {assignment.points} pts
                      </div>
                    </div>
                    <SubAssignmentControlButtons assignmentId={assignment._id}
                          deleteAssignment={(assignmentId) => {
                            dispatch(deleteAssignment(assignmentId));
                          }}
                    />
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </ListGroupItem>
        </ListGroup>
      </div>
    </div>
  );
}
