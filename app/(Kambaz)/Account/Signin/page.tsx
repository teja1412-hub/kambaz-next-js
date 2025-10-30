/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as db from "../../Database";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();

  const signin = (e: React.FormEvent) => {
    e.preventDefault();
    const customUser = db.user.find(
      (u: any) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!customUser) return alert("Invalid credentials!");
    dispatch(setCurrentUser(customUser));
    redirect("/Dashboard");
  };

  return (
    <div className="d-flex vh-100 p-4">
      <div style={{ width: "300px" }}>
        <h3 className="mb-4">Sign In</h3>
        <Form onSubmit={signin}>
          {/* Username */}
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Control
              type="text"
              placeholder="username"
              value={credentials.username || ""}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control
              type="password"
              placeholder="password"
              value={credentials.password || ""}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
          </Form.Group>

          {/* Sign in Button */}
          <div className="d-grid gap-2 mb-3">
            <Button id="wd-signin-btn" variant="primary" type="submit">
              Sign In
            </Button>
          </div>

          {/* Sign up Link */}
          <div className="text-center">
            <Link id="wd-signup-link" href="Signup">
              Sign up
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
