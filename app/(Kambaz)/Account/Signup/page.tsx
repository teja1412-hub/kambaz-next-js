"use client";

import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  return (
    <div className="d-flex vh-100 p-4">
      <div style={{ width: "300px" }}>
        <h3 className="mb-4">Sign Up</h3>
        <Form>
          {/* Username */}
          <Form.Group className="mb-3" controlId="formUsername">
            {/* <Form.Label>Username</Form.Label> */}
            <Form.Control
              type="text"
              placeholder="username"
              defaultValue="john.Wonderland"
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="formPassword">
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control
              type="password"
              placeholder="password"
              defaultValue="123@abc"
            />
          </Form.Group>
        
          {/* Sign up Button */}
          <div className="d-grid gap-2 mb-3">
            <Button
              id="wd-signup-btn"
              variant="primary"
              type="submit"
              // as={Link}
              href="Profile"
            >
              Sign up
            </Button>
          </div>

          {/* Sign in Link */}
          <div className="text-left">
            <Link id="wd-signin-link" href="Signin">
              Sign in
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

