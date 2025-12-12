import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaTrash } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";
import LessonEditor from "./LessonEditor";
import { useState } from "react";
import { RootState } from "../../../store";
import { useSelector } from "react-redux";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
  addLessonToModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
  addLessonToModule: (moduleId: string, lessonName: string) => void;
}) {
  const [showLessonModal, setShowLessonModal] = useState(false);
  const [lessonName, setLessonName] = useState("");
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  ) as { currentUser: any };

  return (
    <div className="float-end">
      {currentUser?.role === "FACULTY" && (
        <>
          <FaPencil
            onClick={() => editModule(moduleId)}
            className="text-primary me-3"
          />
          <FaTrash
            className="text-danger me-2 mb-1"
            onClick={() => deleteModule(moduleId)}
          />
        </>
      )}
      <GreenCheckmark />

      {currentUser?.role === "FACULTY" && (
        <>
          <BsPlus
            className="ms-2"
            style={{ cursor: "pointer" }}
            onClick={() => setShowLessonModal(true)}
          />
        </>
      )}
      <IoEllipsisVertical className="fs-4" />

      <LessonEditor
        show={showLessonModal}
        handleClose={() => setShowLessonModal(false)}
        dialogTitle="Add Lesson"
        lessonName={lessonName}
        setLessonName={setLessonName}
        addLesson={() => {
          addLessonToModule(moduleId, lessonName);
          setLessonName("");
        }}
      />
    </div>
  );
}
