"use client";

import { useParams } from "next/navigation";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

import * as db from "../../../../Database"; // Make sure this points to the right location

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Course ID and Assignment ID
  const assignment = db.assignments.find((a) => a._id === aid);

  if (!assignment) {
    return <div className="p-4">Assignment not found.</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            rows={6}
            defaultValue={assignment.description}
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
                defaultValue={assignment.points}
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
              <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
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
              <Form.Select id="wd-display-grade-as" defaultValue="Percentage">
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
                  <Form.Select defaultValue="Online" className="mb-3">
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                  </Form.Select>

                  <Form.Label>Online Entry Options</Form.Label>
                  <div>
                    <Form.Check type="checkbox" label="Text Entry" defaultChecked />
                    <Form.Check type="checkbox" label="Website URL" defaultChecked />
                    <Form.Check type="checkbox" label="Media Recordings" />
                    <Form.Check type="checkbox" label="Student Annotation" />
                    <Form.Check type="checkbox" label="File Uploads" />
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
                  {/* Assign To */}
                  <Form.Group className="mb-3">
                    <Form.Label>Assign to</Form.Label>
                    <Select
                      isMulti
                      defaultValue={{ value: "everyone", label: "Everyone" }}
                      options={[
                        { value: "everyone", label: "Everyone" },
                        { value: "students", label: "Students only" },
                        { value: "tas", label: "TA's" },
                      ]}
                    />
                  </Form.Group>

                  {/* Due Date */}
                  <Form.Group className="mb-3">
                    <Form.Label>Due</Form.Label>
                    <Form.Control
                      type="date"
                      defaultValue={assignment.dueDate?.substring(0, 10)}
                    />
                  </Form.Group>

                  <div className="row">
                    {/* Available From */}
                    <Form.Group className="col">
                      <Form.Label>Available from</Form.Label>
                      <Form.Control
                        type="date"
                        defaultValue={assignment.availableFrom?.substring(0, 10)}
                      />
                    </Form.Group>

                    {/* Until */}
                    <Form.Group className="col">
                      <Form.Label>Until</Form.Label>
                      <Form.Control
                        type="date"
                        defaultValue={assignment.dueDate?.substring(0, 10)}
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
          <Button variant="secondary" id="wd-cancel">
            Cancel
          </Button>
          <Button variant="danger" id="wd-save">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
