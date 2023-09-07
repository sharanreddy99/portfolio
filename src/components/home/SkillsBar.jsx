import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">
        <b style={{ fontSize: "1em" }}>{skill}</b>
      </p>
      <ProgressBar
        className={!isScrolled ? "progress " : " progress-bar-animation"}
        now={value}
      />
    </div>
  );
}

export default SkillsBar;
