import React from "react";

const GetInTouch = ({ heading, message, contact }) => {
  return (
    <>
      <h2 className="display-3 text-center lead" style={{ color: "white" }}>
        <b style={{ fontSize: "1em" }} className="customheading3">
          {heading}
        </b>
      </h2>
      <b className="lead text-center pb-3 lead" style={{ color: "white" }}>
        {message}
        <br />
      </b>

      <div className="p-4">
        {contact.icons.map((icon, index) => (
          <>
            <a
              className="colorfade"
              key={`social-icon-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.href}
              style={{ textDecoration: "none" }}
              aria-label={`My ${icon.image.split("-")[1]}`}
            >
              <i className={`${icon.image}`} />
              <b>{icon.label}</b>
            </a>
            {window.innerWidth < 576 || icon.isBreak ? (
              <>
                <br />
              </>
            ) : null}
          </>
        ))}
      </div>
    </>
  );
};

export default GetInTouch;
