import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  mainBody,
  repos,
  about,
  experiences,
  skills,
  leadership,
} from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";

const Navigation = React.forwardRef((props, ref) => {
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      -currPos.y + navBottom >= document.body.parentElement.clientHeight
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    -scrollPosition + navBottom >= document.body.parentElement.clientHeight
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={` fixed-top px-3 ${
        !isTop ? "customnavbarcolor" : "customnavbarblack"
      }`}
      expand="lg"
    >
      <Navbar.Brand
        className="navbar-brand"
        href={process.env.PUBLIC_URL + "/#home"}
      >
        <b
          className={`${!isTop ? "customheading" : ""}`}
          style={{ fontSize: "1em" }}
        >{`<${mainBody.firstName} />`}</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav ms-auto">
          {/* {
            <NavLink className="nav-item lead">
              <Link to={process.env.PUBLIC_URL + "/blog"}>Blog</Link>
            </NavLink>
          } */}
          {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              <b
                style={{ fontSize: "1em" }}
                className={`${!isTop ? "customheading2" : ""}`}
              >
                About
              </b>
            </NavLink>
          )}
          {experiences.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#experience"}
            >
              <b
                style={{ fontSize: "1em" }}
                className={`${!isTop ? "customheading2" : ""}`}
              >
                Experience
              </b>
            </NavLink>
          )}
          {repos.show && (
            <NavLink href={process.env.PUBLIC_URL + "/#projects"}>
              <b
                style={{ fontSize: "1em" }}
                className={`${!isTop ? "customheading2" : ""}`}
              >
                Projects
              </b>
            </NavLink>
          )}
          {leadership.show && (
            <NavLink href={process.env.PUBLIC_URL + "/#leadership"}>
              <b
                style={{ fontSize: "1em" }}
                className={`${!isTop ? "customheading2" : ""}`}
              >
                Certifications
              </b>
            </NavLink>
          )}

          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              <b
                style={{ fontSize: "1em" }}
                className={`${!isTop ? "customheading2" : ""}`}
              >
                Skills
              </b>
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            <b
              style={{ fontSize: "1em" }}
              className={`${!isTop ? "customheading2" : ""}`}
            >
              Resume
            </b>
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
