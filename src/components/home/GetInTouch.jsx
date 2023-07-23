import React from "react";

const GetInTouch = ({ heading, message, contact }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}
        <br />

        <div className="p-5">
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
                {icon.label}
              </a>
              {icon.isBreak ? <br /> : null}
            </>
          ))}
        </div>
      </p>
    </>
  );
};

export default GetInTouch;
