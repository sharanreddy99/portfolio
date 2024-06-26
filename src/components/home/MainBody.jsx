import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(100deg, ${gradient})`,
          minWidth: "100vw",
          maxWidth: "100vw",
          minHeight: "100vh",
          maxHeight: "100vh",
        }}
        className="title bg-transparent bgstyle text-light d-flex align-content-center align-items-center m-0"
      >
        <div id="stars" style={{ position: "absolute", left: "-50px" }}></div>
        <Container className="text-center">
          <h1
            ref={ref}
            className="display-1 colorfade customtextshadow"
            style={{ userSelect: "none" }}
          >
            {title}
          </h1>
          <Typist>
            <div
              className="lead typist colorfade"
              style={{ userSelect: "none" }}
            >
              {message}
            </div>
          </Typist>
          <div className="p-5">
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`${icon.image}  fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg colorfade2"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            Learn more
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
