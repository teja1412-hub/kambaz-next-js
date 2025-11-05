/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams, useRouter } from "next/navigation";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Select from "react-select";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store";
import { addAssignment, updateAssignment } from "../reducer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Course ID and Assignment ID
  const router = useRouter();
  const dispatch = useDispatch();

  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);

  // If editing, find the assignment, otherwise create empty state for new assignment
  const existingAssignment = assignments.find((a: any) => a._id === aid);

  const [title, setTitle] = useState(existingAssignment?.title || "");
  const [description, setDescription] = useState(existingAssignment?.description || "");
  const [points, setPoints] = useState(existingAssignment?.points || 0);
  const [group, setGroup] = useState("ASSIGNMENTS");
  const [gradeType, setGradeType] = useState("Percentage");
  const [submissionType, setSubmissionType] = useState("Online");
  const [onlineOptions, setOnlineOptions] = useState({
    textEntry: true,
    websiteURL: true,
    mediaRecordings: false,
    studentAnnotation: false,
    fileUploads: false
  });
  const [assignTo, setAssignTo] = useState([{ value: "everyone", label: "Everyone" }]);

  const formatDateTime = (dateStr: string | undefined) => {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const [dueDate, setDueDate] = useState(formatDateTime(existingAssignment?.dueDate));
const [availableFrom, setAvailableFrom] = useState(formatDateTime(existingAssignment?.availableFrom));
const [availableUntil, setAvailableUntil] = useState(formatDateTime(existingAssignment?.dueDate));


  const handleSave = () => {
    const assignmentData = {
      _id: existingAssignment?._id, // keep the same id if editing
      course: cid,
      title,
      description,
      points,
      group,
      gradeType,
      submissionType,
      onlineOptions,
      assignTo,
      dueDate,
      availableFrom,
      availableUntil
    };

    if (existingAssignment) {
      dispatch(updateAssignment(assignmentData));
    } else {
      dispatch(addAssignment(assignmentData));
    }

    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        {/* Points */}
        <Form.Group className="mb-3">
          <div className="row align-items-center">
            <Form.Label htmlFor="wd-points" className="col-3 text-end">
              Points
            </Form.Label>
            <div className="col">
              <Form.Control
                id="wd-points"
                type="number"
                value={points}
                onChange={(e) => setPoints(Number(e.target.value))}
              />
            </div>
          </div>
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group className="mb-3">
          <div className="row align-items-center">
            <Form.Label htmlFor="wd-group" className="col-3 text-end">
              Assignment Group
            </Form.Label>
            <div className="col">
              <Form.Select id="wd-group" value={group} onChange={(e) => setGroup(e.target.value)}>
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </Form.Select>
            </div>
          </div>
        </Form.Group>

        {/* Display Grade as */}
        <Form.Group className="mb-4">
          <div className="row align-items-center">
            <Form.Label htmlFor="wd-display-grade-as" className="col-3 text-end">
              Display Grade as
            </Form.Label>
            <div className="col">
              <Form.Select
                id="wd-display-grade-as"
                value={gradeType}
                onChange={(e) => setGradeType(e.target.value)}
              >
                <option value="Percentage">Percentage</option>
                <option value="GPA">GPA</option>
                <option value="Alphabet">Alphabet</option>
              </Form.Select>
            </div>
          </div>
        </Form.Group>

        {/* Submission Type Box */}
        <Form.Group className="mb-4">
          <div className="row">
            <Form.Label className="col-3 text-end">Submission Type</Form.Label>
            <div className="col">
              <Card>
                <Card.Body>
                  <Form.Select
                    value={submissionType}
                    onChange={(e) => setSubmissionType(e.target.value)}
                    className="mb-3"
                  >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </Form.Select>

                  <Form.Label>Online Entry Options</Form.Label>
                  <div>
                    <Form.Check
                      type="checkbox"
                      label="Text Entry"
                      checked={onlineOptions.textEntry}
                      onChange={() => setOnlineOptions({ ...onlineOptions, textEntry: !onlineOptions.textEntry })}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Website URL"
                      checked={onlineOptions.websiteURL}
                      onChange={() => setOnlineOptions({ ...onlineOptions, websiteURL: !onlineOptions.websiteURL })}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Media Recordings"
                      checked={onlineOptions.mediaRecordings}
                      onChange={() => setOnlineOptions({ ...onlineOptions, mediaRecordings: !onlineOptions.mediaRecordings })}
                    />
                    <Form.Check
                      type="checkbox"
                      label="Student Annotation"
                      checked={onlineOptions.studentAnnotation}
                      onChange={() => setOnlineOptions({ ...onlineOptions, studentAnnotation: !onlineOptions.studentAnnotation })}
                    />
                    <Form.Check
                      type="checkbox"
                      label="File Uploads"
                      checked={onlineOptions.fileUploads}
                      onChange={() => setOnlineOptions({ ...onlineOptions, fileUploads: !onlineOptions.fileUploads })}
                    />
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Form.Group>

        {/* Assign Box */}
        <Form.Group className="mb-4">
          <div className="row">
            <Form.Label className="col-3 text-end">Assign</Form.Label>
            <div className="col">
              <Card>
                <Card.Body>
                  <Form.Group className="mb-3">
                    <Form.Label>Assign to</Form.Label>
                    <Select
                      isMulti
                      value={assignTo}
                      onChange={(values) => setAssignTo(values as any)}
                      options={[
                        { value: "everyone", label: "Everyone" },
                        { value: "students", label: "Students only" },
                        { value: "tas", label: "TA's" },
                      ]}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Due</Form.Label>
                    <Form.Control
                      type="datetime-local"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </Form.Group>

                  <div className="row">
                    <Form.Group className="col">
                      <Form.Label>Available from</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        value={availableFrom}
                        onChange={(e) => setAvailableFrom(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="col">
                      <Form.Label>Until</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        value={availableUntil}
                        onChange={(e) => setAvailableUntil(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Form.Group>

        <hr />

        {/* Buttons */}
        <div className="d-flex justify-content-end gap-2">
          <Button variant="secondary" id="wd-cancel" onClick={() => router.push(`/Courses/${cid}/Assignments`)}>
            Cancel
          </Button>
          <Button variant="danger" id="wd-save" onClick={handleSave}>
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
