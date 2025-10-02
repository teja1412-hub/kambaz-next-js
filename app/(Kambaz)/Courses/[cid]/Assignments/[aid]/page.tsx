"use client";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Select from "react-select";


export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        {/* Assignment Name */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1" />
        </Form.Group>

        {/* Description */}
        <Form.Group className="mb-4">
          {/* <Form.Label>Description</Form.Label> */}
          <Form.Control
            as="textarea"
            rows={6}
            defaultValue={`The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.

The landing page should include:
• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories`}
          />
        </Form.Group>

        {/* Points */}
        <Form.Group className="d-flex align-items-center mb-3">
          <Form.Label
            htmlFor="wd-points"
            className="me-3 text-end"
            style={{ flex: "0 0 25%" }}
          >
            Points
          </Form.Label>
          <Form.Control
            id="wd-points"
            type="number"
            defaultValue={100}
            style={{ flex: "1" }}
          />
        </Form.Group>

        {/* Assignment Group */}
        <Form.Group className="d-flex align-items-center mb-3">
          <Form.Label
            htmlFor="wd-group"
            className="me-3 text-end"
            style={{ flex: "0 0 25%" }}
          >
            Assignment Group
          </Form.Label>
          <Form.Select
            id="wd-group"
            defaultValue="ASSIGNMENTS"
            style={{ flex: "1" }}
          >
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </Form.Select>
        </Form.Group>

        {/* Display Grade as */}
        <Form.Group className="d-flex align-items-center mb-4">
          <Form.Label
            htmlFor="wd-display-grade-as"
            className="me-3 text-end"
            style={{ flex: "0 0 25%" }}
          >
            Display Grade as
          </Form.Label>
          <Form.Select
            id="wd-display-grade-as"
            defaultValue="Percentage"
            style={{ flex: "1" }}
          >
            <option value="Percentage">Percentage</option>
            <option value="GPA">GPA</option>
            <option value="Alphabet">Alphabet</option>
          </Form.Select>
        </Form.Group>

        {/* Submission Type Box */}
        <Form.Group className="d-flex align-items-start mb-4">
          <Form.Label className="me-3 text-end" style={{ flex: "0 0 25%" }}>
            Submission Type
          </Form.Label>
          <Card style={{ flex: "1" }}>
            <Card.Body>
              <Form.Select defaultValue="Online" className="mb-3">
                <option value="Online">Online</option>
                <option value="Offline">Offline</option>
              </Form.Select>

              <Form.Label>Online Entry Options</Form.Label>
              <div>
                <Form.Check
                  type="checkbox"
                  id="wd-text-entry"
                  label="Text Entry"
                  defaultChecked
                />
                <Form.Check
                  type="checkbox"
                  id="wd-website-url"
                  label="Website URL"
                  defaultChecked
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
              </div>
            </Card.Body>
          </Card>
        </Form.Group>

        {/* Assign Box */}
        <Form.Group className="d-flex align-items-start mb-4">
          <Form.Label className="me-3 text-end" style={{ flex: "0 0 25%" }}>
            Assign
          </Form.Label>
          <Card style={{ flex: "1" }}>
            <Card.Body>
              {/* Assign To */}
          <Form.Group className="mb-3">
            <Form.Label>Assign to</Form.Label>
            <Select
              isMulti
              defaultValue={{ value: "everyone", label: "Everyone" }}
              options={[
                { value: "everyone", label: "Everyone" },
                { value: "students only", label: "Students only" },
                { value: "TA's", label: "TA's" },
              ]}
              className="w-100"
            />
          </Form.Group>

              {/* Due */}
              <Form.Group className="mb-3" controlId="wd-due-date">
                <Form.Label>Due</Form.Label>
                <Form.Control type="date" defaultValue="2025-09-21" />
              </Form.Group>

              {/* Available From & Until */}
              <div className="d-flex gap-3">
                <Form.Group className="flex-fill" controlId="wd-available-from">
                  <Form.Label>Available from</Form.Label>
                  <Form.Control type="date" defaultValue="2025-09-17" />
                </Form.Group>
                <Form.Group
                  className="flex-fill"
                  controlId="wd-available-until"
                >
                  <Form.Label>Available until</Form.Label>
                  <Form.Control type="date" defaultValue="2025-09-21" />
                </Form.Group>
              </div>
            </Card.Body>
          </Card>
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
