/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams, useRouter } from "next/navigation";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as client from "../client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { setAssignments } from "../reducer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const assignments = useSelector(
    (state: RootState) => state.assignmentsReducer.assignments
  );

  const isNewAssignment = aid == "new";

  const [assignment, setAssignment] = useState<any>({
    title: "",
    description: "",
    points: 100,
    assignTo: "Everyone",
    assignmentGroup: "ASSIGNMENTS",
    displayGradeAs: "Percentage",
    submissionType: "Online",
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
    course: cid,
  });

  useEffect(() => {
    if (!isNewAssignment) {
      const currentAssignment = assignments.find((a: any) => a._id === aid);
      if (currentAssignment) {
        setAssignment(currentAssignment);
      }
    }
  }, [aid, assignments, isNewAssignment]);

  const handleSave = async () => {
    try {
      if (isNewAssignment) {
        // CREATE new assignment
        const newAssignment = await client.createAssignment(cid as string, assignment);
        
        // Add to Redux
        dispatch(setAssignments([...assignments, newAssignment]));
      } else {
        // UPDATE existing assignment
        await client.updateAssignment(assignment);
        
        const updatedAssignments = assignments.map((a: any) =>
          a._id === assignment._id ? assignment : a
        );
        dispatch(setAssignments(updatedAssignments));
      }

      router.push(`/Courses/${cid}/Assignments`);
    } catch (error) {
      console.error("Error saving assignment:", error);
      alert("Failed to save assignment");
    }
  };

  const handleCancel = () => {
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <Form.Control
            id="wd-name"
            type="text"
            value={assignment.title}
            onChange={(e) =>
              setAssignment({ ...assignment, title: e.target.value })
            }
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-3">
          <Form.Label htmlFor="wd-description">Description</Form.Label>
          <Form.Control
            as="textarea"
            id="wd-description"
            rows={5}
            value={assignment.description}
            onChange={(e) =>
              setAssignment({ ...assignment, description: e.target.value })
            }
          />
        </Form.Group>

        {/* Points */}
        <Form.Group className="mb-3 row">
          <Form.Label htmlFor="wd-points" className="col-sm-2 col-form-label">
            Points
          </Form.Label>
          <div className="col-sm-10">
            <Form.Control
              id="wd-points"
              type="number"
              value={assignment.points}
              onChange={(e) =>
                setAssignment({ ...assignment, points: Number(e.target.value) })
              }
            />
          </div>
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group className="mb-3 row">
          <Form.Label htmlFor="wd-group" className="col-sm-2 col-form-label">
            Assignment Group
          </Form.Label>
          <div className="col-sm-10">
            <Form.Select
              id="wd-group"
              value={assignment.assignmentGroup}
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  assignmentGroup: e.target.value,
                })
              }
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </Form.Select>
          </div>
        </Form.Group>

        {/* Display Grade As */}
        <Form.Group className="mb-3 row">
          <Form.Label
            htmlFor="wd-display-grade-as"
            className="col-sm-2 col-form-label"
          >
            Display Grade as
          </Form.Label>
          <div className="col-sm-10">
            <Form.Select
              id="wd-display-grade-as"
              value={assignment.displayGradeAs}
              onChange={(e) =>
                setAssignment({ ...assignment, displayGradeAs: e.target.value })
              }
            >
              <option value="Percentage">Percentage</option>
              <option value="Points">Points</option>
              <option value="Letter Grade">Letter Grade</option>
            </Form.Select>
          </div>
        </Form.Group>

        {/* Submission Type */}
        <Form.Group className="mb-3 row">
          <Form.Label
            htmlFor="wd-submission-type"
            className="col-sm-2 col-form-label"
          >
            Submission Type
          </Form.Label>
          <div className="col-sm-10">
            <div className="border p-3">
              <Form.Select
                id="wd-submission-type"
                className="mb-3"
                value={assignment.submissionType}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    submissionType: e.target.value,
                  })
                }
              >
                <option value="Online">Online</option>
                <option value="In Person">In Person</option>
                <option value="External Tool">External Tool</option>
              </Form.Select>
              {assignment.submissionType === "Online" && (
                <>
                  <Form.Label>Online Entry Options</Form.Label>
                  <Form.Check
                    type="checkbox"
                    id="wd-text-entry"
                    label="Text Entry"
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-website-url"
                    label="Website URL"
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-media-recordings"
                    label="Media Recordings"
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-student-annotation"
                    label="Student Annotation"
                  />
                  <Form.Check
                    type="checkbox"
                    id="wd-file-upload"
                    label="File Uploads"
                  />
                </>
              )}
            </div>
          </div>
        </Form.Group>

        {/* Assign */}
        <Form.Group className="mb-3 row">
          <Form.Label className="col-sm-2 col-form-label">Assign</Form.Label>
          <div className="col-sm-10">
            <div className="border p-3">
              <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
                <Form.Control
                  id="wd-assign-to"
                  type="text"
                  value={assignment.assignTo}
                  onChange={(e) =>
                    setAssignment({ ...assignment, assignTo: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="wd-due-date">Due</Form.Label>
                <Form.Control
                  id="wd-due-date"
                  type="datetime-local"
                  value={
                    assignment.dueDate
                      ? new Date(assignment.dueDate).toISOString().slice(0, 16)
                      : ""
                  }
                  onChange={(e) =>
                    setAssignment({ ...assignment, dueDate: e.target.value })
                  }
                />
              </Form.Group>

              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="wd-available-from">
                      Available from
                    </Form.Label>
                    <Form.Control
                      id="wd-available-from"
                      type="datetime-local"
                      value={
                        assignment.availableFrom
                          ? new Date(assignment.availableFrom)
                              .toISOString()
                              .slice(0, 16)
                          : ""
                      }
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          availableFrom: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </div>

                <div className="col-md-6">
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="wd-available-until">Until</Form.Label>
                    <Form.Control
                      id="wd-available-until"
                      type="datetime-local"
                      value={
                        assignment.availableUntil
                          ? new Date(assignment.availableUntil)
                              .toISOString()
                              .slice(0, 16)
                          : ""
                      }
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          availableUntil: e.target.value,
                        })
                      }
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </div>
        </Form.Group>

        <hr />

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
