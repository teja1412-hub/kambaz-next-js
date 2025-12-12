/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

export default function AssignmentControlButtons({ courseId, addAssignment }: { courseId: string; addAssignment: () => void; }) {
  const router = useRouter();
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as { currentUser: any };
  return (
    <div className="float-end d-flex align-items-center gap-2">
      {currentUser?.role === "FACULTY" && (
        <>
          <BsPlus
            className="position-relative"
            style={{ bottom: "1px", cursor: "pointer", fontSize: "1.2rem" }}
            onClick={addAssignment}
          />
        </>
      )}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
