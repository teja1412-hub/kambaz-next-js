/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import * as client from "../client";

export default function Signin() {
  const [user, setUser] = useState<any>({});
    const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const signup = async () => {
    try {
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Account/Profile");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };
  return (
    <div className="d-flex vh-100 p-4">
      <div style={{ width: "300px" }}>
        <h3 className="mb-4">Sign Up</h3>
        {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
        <Form>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Control
              type="text"
              placeholder="username"
              value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control
              type="password"
              placeholder="password"
              value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form.Group>
        
          <div className="d-grid gap-2 mb-3">
            <Button
              id="wd-signup-btn"
              variant="primary"
              onClick={signup} 
            >
              Sign up
            </Button>
          </div>

          <div className="text-center">
            <Link id="wd-signin-link" href="Signin">
              Sign in
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

