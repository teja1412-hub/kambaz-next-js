/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

export default function SubAssignmentControlButtons(
  { assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmed) {
      deleteAssignment(assignmentId);
    }
  };
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as { currentUser: any };
  return (
    <div className="float-end">
      {currentUser?.role === "FACULTY" && (
        <>
          <FaTrash className="text-danger me-2 mb-1" onClick={handleDelete} />
        </>
      )}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>);
}