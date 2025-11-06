"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: RootState) => state.accountReducer
  );
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();

  return (
    <Nav
      id="wd-account-navigation"
      className="wd list-group fs-5 rounded-0"
      variant="pills"
    >
      {links.map((link) => {
        const isActive = pathname.endsWith(link);
        return (
          <NavItem key={link}>
            <NavLink
              as={Link}
              href={`${link}`}
              id={`wd-course-${link.toLowerCase()}-link`}
              className={`list-group-item ${
                isActive ? "active" : "text-danger"
              } border-0`}
              active={isActive}
            >
              {link}
            </NavLink>
          </NavItem>
        );
      })}
    </Nav>
  );
}
