/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Link from "next/link";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import AssignmentControlButtons from "./AssignmentControlButtons";
import SubAssignmentControlButtons from "./SubAssignmentControlButtons";
import AssignementControls from "./AssignmentControls";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { setAssignments } from "./reducer";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as client from "./client";

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "UTC",
  };
  const date = new Date(dateString);
  return date.toLocaleString("en-US", options);
}

export default function Assignments() {
  const { cid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state: RootState) => state.assignmentsReducer.assignments
  );

  useEffect(() => {
    const fetchAssignments = async () => {
      const assignments = await client.findAssignmentsForCourse(cid as string);
      dispatch(setAssignments(assignments));
    };
    fetchAssignments();
  }, [cid, dispatch]);

  const handleDeleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    dispatch(
      setAssignments(assignments.filter((a: any) => a._id !== assignmentId))
    );
  };

  const handleAddAssignment = () => {
    if (!cid) return;

    // Redirect to editor
    router.push(`/Courses/${cid}/Assignments/new`);
  };

  const courseAssignments = assignments.filter((a: any) => a.course === cid);

  const [groups, setGroups] = useState<
    { id: string; name: string; percent: number }[]
  >([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addGroup = (name: string, percent: number) => {
    const totalPercent = groups.reduce((sum, g) => sum + g.percent, 0);
    if (totalPercent + percent > 100) {
      alert("Total percentage cannot exceed 100%");
      return;
    }

    const newGroup = { id: Date.now().toString(), name, percent };
    setGroups([...groups, newGroup]);
  };

  const filteredAssignments = courseAssignments.filter((a: any) =>
    a.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const courseId = Array.isArray(cid) ? cid[0] : cid;
  if (!courseId) {
    // Handles case when cid is missing in the URL
    return <div>Course not found!</div>;
  }

  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as { currentUser: any };

  return (
    <div id="wd-assignments-quizzes-exams-projects">
      <div id="wd-assignments">
        <AssignementControls
          courseId={courseId}
          addGroup={addGroup}
          addAssignment={handleAddAssignment}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          groups={groups}
        />
        <br />
        <br />

        {groups.map((group) => (
          <ListGroupItem
            key={group.id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-2 ps-2 bg-secondary d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                {group.name}
              </div>
              <div className="d-flex align-items-center">
                <p
                  className="wd-rounded-corners-all-around wd-border-thin wd-border-black wd-border-solid wd-percentage-box mb-0 me-3"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {group.percent}% of Total
                </p>
                <AssignmentControlButtons
                  courseId={courseId}
                  addAssignment={handleAddAssignment}
                />
              </div>
            </div>
          </ListGroupItem>
        ))}

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
                <AssignmentControlButtons
                  courseId={courseId}
                  addAssignment={handleAddAssignment}
                />
              </div>
            </div>

            <ListGroup className="wd-lessons rounded-0 ">
              {filteredAssignments.map((assignment: any) => (
                <ListGroupItem
                  key={assignment._id}
                  className="wd-lesson px-3 ps-1"
                >
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-start">
                      <BsGripVertical className="me-2 fs-3 mt-1" />
                      <FaRegFileAlt className="me-2 text-success fs-4 mt-1" />
                      <div>
                        <a
                          href=""
                          className="wd-assignment-link"
                          onClick={(e) => {
                            if (currentUser?.role === "FACULTY") {
                              router.push(`/Courses/${cid}/Assignments/${assignment._id}`);
                            }
                          }}
                        >
                          {assignment.title}
                        </a>
                        <br />
                        <span className="text-danger">
                          Multiple Modules
                        </span> | <b>Not available until</b>{" "}
                        {formatDate(assignment.availableFrom)} | <br />
                        <b>Due</b> {formatDate(assignment.dueDate)} |{" "}
                        {assignment.points} pts
                      </div>
                    </div>
                    <SubAssignmentControlButtons
                      assignmentId={assignment._id}
                      deleteAssignment={handleDeleteAssignment}
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
