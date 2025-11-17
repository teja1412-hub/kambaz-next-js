import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/enrollments`;

export const enrollUser = async (courseId: string) => {
  const { data } = await axiosWithCredentials.post(`${ENROLLMENTS_API}`, {
    course: courseId,
  });
  return data;
};

export const unenrollUser = async (courseId: string) => {
  await axiosWithCredentials.delete(`${ENROLLMENTS_API}`, {
   data: {
      course: courseId,
    },
  });
}

export const fetchEnrollments = async () => {
  const { data } = await axiosWithCredentials.get(`${ENROLLMENTS_API}`);
  return data;
};
