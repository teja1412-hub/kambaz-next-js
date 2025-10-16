"use client"
import Link from "next/link";
import {usePathname} from "next/navigation"
import { ListGroup, ListGroupItem} from "react-bootstrap";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname();
  const links = [
    { label: "Home",        path: "/Home"},
    { label: "Modules",     path: "/Modules"},
    { label: "Piazza",      path: "/Piazza"},
    { label: "Zoom",        path: "/Zoom"},
    { label: "Assignments", path: "/Assignments"},
    { label: "Quizzes",     path: "/Quizzes"},
    { label: "Grades",      path: "/Grades" },
    { label: "People",      path: "/People/Table"},
  ];
  return (
    <ListGroup id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const fullPath = `/Courses/${cid}${link.path}`;
        const isActive = pathname.startsWith(fullPath);
;

        return (
          <ListGroupItem
            as={Link}
            key={link.label}
            href={fullPath}
            id={`wd-course-${link.label.toLowerCase()}-link`}
            className={`border-0 list-group-item ${isActive ? "active" : "text-danger"}`}
            action
          >
            {link.label}
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );}
