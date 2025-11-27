/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const REMOTE_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const findModules = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModule = async (courseId: string, module: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const createLesson = async (courseId: string, moduleId: string, lesson: any) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules/${moduleId}/lessons`,
    lesson
  );
  return response.data;
};

export const updateModule = async (courseId: string, module: any) => {
  const response = await axios.put(
    `${COURSES_API}/${courseId}/modules/${module._id}`,
    module
  );
  return response.data;
};

export const deleteModule = async (courseId: string, moduleId: string) => {
  const response = await axios.delete(`${COURSES_API}/${courseId}/modules/${moduleId}`);
  return response.data;
};