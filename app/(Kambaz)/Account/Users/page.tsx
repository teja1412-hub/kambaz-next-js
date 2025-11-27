/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "../../Courses/[cid]/People/Table/page";
import PeopleDetails from "../../Courses/[cid]/People/Details";
import * as client from "../client";
import { FaPlus } from "react-icons/fa";
import { FormControl } from "react-bootstrap";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [creatingNew, setCreatingNew] = useState(false);

  const { uid } = useParams();

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const handleAddUser = () => {
    setCreatingNew(true);
    setShowDetails(true);
    setSelectedUserId(null);
  };

  useEffect(() => {
    fetchUsers();
  }, [uid]);

  return (
    <div id="wd-people-table" className="p-4">
      {showDetails && (
        <PeopleDetails
          uid={selectedUserId}
          isCreating={creatingNew}
          onClose={() => {
            setShowDetails(false);
            setSelectedUserId(null);
            setCreatingNew(false);
            fetchUsers();
          }}
        />
      )}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Users</h3>
        <button onClick={handleAddUser} className="btn btn-danger">
          <FaPlus className="me-2" />
          User
        </button>
      </div>

      <div className="d-flex gap-2 mb-3">
        <FormControl
          onChange={(e) => filterUsersByName(e.target.value)}
          placeholder="Search people"
          className="w-25"
          value={name}
        />
        <select
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="form-select w-25"
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </select>
      </div>

      <PeopleTable 
        users={users} 
        fetchUsers={fetchUsers}
        onSelectUser={(userId) => {
          setSelectedUserId(userId);
          setShowDetails(true);
          setCreatingNew(false);
        }}
      />
    </div>
  );
}