/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import { FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useEffect, useState } from "react";
import { RootState } from "../../../store";
import {setModules, updateModule } from "./reducer";
import * as client from "./client";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: RootState) => state.modulesReducer);
  const dispatch = useDispatch();

  const fetchModules = async () => {
    const modules = await client.findModules(cid as string);
    dispatch(setModules(modules));
  };

  const handleAddModule = async () => {
    if (!cid) return;
    const newmodule = await client.createModule(cid as string, {
      name: moduleName,
      course: cid,
    });
    dispatch(setModules([...modules, newmodule]));
    setModuleName("");
  };

  const handleDeleteModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(setModules(modules.filter((m: any) => m._id !== moduleId)));
  };

  const handleUpdateModule = async (module: any) => {
    await client.updateModule(module);
    const newModules = modules.map((m: any) => m._id === module._id ? module : m );
    dispatch(setModules(newModules));
  };

  const handleEditModule = (moduleId: string) => {
    const updatedModules = modules.map((m: any) =>
      m._id === moduleId ? { ...m, editing: true } : m
    );
    dispatch(setModules(updatedModules));
  };

  const handleAddLesson = (moduleId: string, lessonName: string) => {
    const updatedModules = modules.map((m: any) => {
      if (m._id === moduleId) {
        const newLesson = {
          _id: Date.now().toString(),
          name: lessonName,
          description: "",
          module: moduleId,
        };
        return {
          ...m,
          lessons: [...(m.lessons || []), newLesson],
        };
      }
      return m;
    });
    dispatch(setModules(updatedModules));
  };

  useEffect(() => {
    fetchModules();
  }, []);

  return (
    <div className="wd-modules">
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={handleAddModule}
      />

      <br />
      <br />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module: any) => (
          <ListGroupItem
            key={module._id}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary">
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={(moduleId) => handleDeleteModule(moduleId)}
                editModule={(moduleId) => handleEditModule(moduleId)}
                addLessonToModule={(moduleId, lessonName) =>
                  handleAddLesson(moduleId, lessonName)
                }
              />
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
              {module.editing && (
                <FormControl
                  className="w-50 d-inline-block"
                  onChange={(e) => dispatch(
                        updateModule({ ...module, name: e.target.value })
                      )}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUpdateModule({ ...module, editing: false });
                    }
                  }}
                  defaultValue={module.name}
                />
              )}
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons rounded-0">
                {module.lessons.map((lesson: any) => (
                  <ListGroupItem
                    key={lesson._id}
                    className="wd-lesson p-3 ps-1"
                  >
                    <LessonControlButtons />
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  );
}
