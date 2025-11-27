/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../../../Account/client";
import { FaUserCircle } from "react-icons/fa";
import { FaPencil, FaCheck } from "react-icons/fa6";

export default function PeopleDetails({
  uid,
  isCreating = false,
  onClose,
}: {
  uid: string | null;
  isCreating?: boolean;
  onClose: () => void;
}) {
  const [user, setUser] = useState<any>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    role: "STUDENT",
    section: "",
    loginId: "",
  });
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  const fetchUser = async () => {
    if (!uid) return;
    const fetchedUser = await client.findUserById(uid);
    setUser(fetchedUser);
    setName(`${fetchedUser.firstName} ${fetchedUser.lastName}`);
  };

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    
    if (!firstName || !lastName) {
      alert("Please enter both first and last name (separated by space)");
      return;
    }

    if (isCreating) {
      // CREATE NEW USER
      if (!user.username.trim()) {
        alert("Username is required");
        return;
      }
      if (!user.password.trim()) {
        alert("Password is required");
        return;
      }

      const newUser = {
        ...user,
        firstName,
        lastName,
      };
      await client.createUser(newUser);
    } else {
      // UPDATE EXISTING USER
      const updatedUser = { ...user, firstName, lastName };
      await client.updateUser(updatedUser);
      setUser(updatedUser);
    }
    
    setEditing(false);
    onClose();
  };

  const deleteUser = async (uid: string) => {
    if (confirm("Are you sure you want to delete this user?")) {
      await client.deleteUser(uid);
      onClose();
    }
  };

  useEffect(() => {
    if (isCreating) {
      setEditing(true);
      setName("");
    } else if (uid) {
      fetchUser();
    }
  }, [uid, isCreating]);

  if (!uid && !isCreating) return null;

  return (
    <div
      className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25"
      style={{ overflowY: "auto", zIndex: 1000 }}
    >
      <button
        onClick={onClose}
        className="btn position-fixed end-0 top-0 wd-close-details"
      >
        <IoCloseSharp className="fs-1" />
      </button>

      <div className="text-center mt-2 mb-3">
        <FaUserCircle className="text-secondary fs-1" />
      </div>

      <h5 className="mb-3">{isCreating ? "Create New User" : "User Details"}</h5>
      <hr />

      {/* Name */}
      <div className="mb-3">
        <label className="fw-bold d-block">Name</label>
        {!editing && !isCreating ? (
          <div className="d-flex justify-content-between align-items-center">
            <span onClick={() => setEditing(true)} style={{ cursor: "pointer" }}>
              {user.firstName} {user.lastName}
            </span>
            <FaPencil
              onClick={() => setEditing(true)}
              className="text-primary"
              style={{ cursor: "pointer" }}
            />
          </div>
        ) : (
          <div className="d-flex gap-2 align-items-center">
            <FormControl
              placeholder="First Last"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveUser();
              }}
              autoFocus={!isCreating}
            />
            {!isCreating && (
              <FaCheck
                onClick={saveUser}
                className="text-success fs-4"
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        )}
      </div>

      {/* Username - Only show when creating */}
      {isCreating && (
        <div className="mb-3">
          <label className="fw-bold d-block">Username *</label>
          <FormControl
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="username"
            required
          />
        </div>
      )}

      {/* Password - Only show when creating */}
      {isCreating && (
        <div className="mb-3">
          <label className="fw-bold d-block">Password *</label>
          <FormControl
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="password"
            required
          />
        </div>
      )}

      {/* Email */}
      <div className="mb-3">
        <label className="fw-bold d-block">Email</label>
        {isCreating ? (
          <FormControl
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="email@example.com"
          />
        ) : (
          <div>{user.email}</div>
        )}
      </div>

      {/* Role */}
      <div className="mb-3">
        <label className="fw-bold d-block">Role</label>
        {isCreating ? (
          <select
            className="form-select"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          >
            <option value="STUDENT">Student</option>
            <option value="TA">Teaching Assistant</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Administrator</option>
          </select>
        ) : (
          <div>{user.role}</div>
        )}
      </div>

      {/* Section */}
      <div className="mb-3">
        <label className="fw-bold d-block">Section</label>
        {isCreating ? (
          <FormControl
            value={user.section}
            onChange={(e) => setUser({ ...user, section: e.target.value })}
            placeholder="Section"
          />
        ) : (
          <div>{user.section}</div>
        )}
      </div>

      {/* Login ID */}
      <div className="mb-3">
        <label className="fw-bold d-block">Login ID</label>
        {isCreating ? (
          <FormControl
            value={user.loginId}
            onChange={(e) => setUser({ ...user, loginId: e.target.value })}
            placeholder="Login ID"
          />
        ) : (
          <div>{user.loginId}</div>
        )}
      </div>

      {/* Total Activity - Only show for existing users */}
      {!isCreating && (
        <div className="mb-3">
          <label className="fw-bold d-block">Total Activity</label>
          <div>{user.totalActivity}</div>
        </div>
      )}

      <hr />

      <div className="d-flex justify-content-end gap-2">
        <button onClick={onClose} className="btn btn-secondary">
          Cancel
        </button>

        {isCreating ? (
          <button onClick={saveUser} className="btn btn-success">
            Create User
          </button>
        ) : (
          <button
            onClick={() => deleteUser(uid!)}
            className="btn btn-danger"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}