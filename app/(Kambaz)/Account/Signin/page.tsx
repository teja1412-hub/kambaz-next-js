/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as client from "../client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const signin = async () => {
    // e.preventDefault();
    // setError("");
    try {
      const user = await client.signin(credentials);

      dispatch(setCurrentUser(user));

      router.push("/Dashboard");
    } catch (err: any) {
      console.error("Signin error:", err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <div className="d-flex vh-100 p-4">
      <div style={{ width: "300px" }}>
        <h3 className="mb-4">Sign In</h3>
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
              value={credentials.username || ""}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
          </Form.Group>

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

          <div className="d-grid gap-2 mb-3">
            <Button id="wd-signin-btn" variant="primary" onClick={signin}>
              Sign In
            </Button>
          </div>

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
