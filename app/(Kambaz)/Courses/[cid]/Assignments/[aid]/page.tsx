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
        <Form.Group className="mb-3">
          <div className="row align-items-center">
            <Form.Label htmlFor="wd-points" className="col-3 text-end">
              Points
            </Form.Label>
            <div className="col">
              <Form.Control id="wd-points" type="number" defaultValue={100} />
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
                  <div className="row">
                    <Form.Group className="col" controlId="wd-available-from">
                      <Form.Label>Available from</Form.Label>
                      <Form.Control type="date" defaultValue="2025-09-17" />
                    </Form.Group>
                    <Form.Group className="col" controlId="wd-available-until">
                      <Form.Label>Until</Form.Label>
                      <Form.Control type="date" defaultValue="2025-09-21" />
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
