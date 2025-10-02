// import Link from "next/link";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>
//       <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
//       <input defaultValue="123"   placeholder="password" type="password"
//              className="wd-password" /><br/>
//       <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
//       <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
//       <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
//       <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
//       <select defaultValue="FACULTY" id="wd-role">
//         <option value="USER">User</option>       <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
//       </select><br/>
//       <Link href="Signin" > Sign out </Link>
//     </div>
// );}

"use client";

import Link from "next/link";
import { Form, Button } from "react-bootstrap";

export default function Profile() {
  return (
    <div className="d-flex vh-100 p-4">
      <div style={{ width: "300px" }}>
        <h3 className="mb-4">Profile</h3>

        <Form>
          {/* Username */}
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Control
              type="text"
              placeholder="username"
              defaultValue="alice"
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Control
              type="password"
              placeholder="password"
              defaultValue="123"
            />
          </Form.Group>

          {/* First Name */}
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Control
              type="text"
              placeholder="First Name"
              defaultValue="Alice"
            />
          </Form.Group>

          {/* Last Name */}
          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Control
              type="text"
              placeholder="Last Name"
              defaultValue="Wonderland"
            />
          </Form.Group>

          {/* Date of Birth */}
          <Form.Group className="mb-3" controlId="formDob">
            <Form.Control
              type="date"
              defaultValue="2000-01-01"
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control
              type="email"
              placeholder="Email"
              defaultValue="alice@wonderland"
            />
          </Form.Group>

          {/* Role */}
          <Form.Group className="mb-3" controlId="formRole">
            <Form.Select defaultValue="FACULTY">
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </Form.Select>
          </Form.Group>

          {/* Sign out Button */}
          <div className="d-grid gap-2 mt-3">
            <Button
              id="wd-profile-btn"
              variant="danger"
              type="submit"
              // as={Link}
              href="Signin"
            >
              Sign out
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
