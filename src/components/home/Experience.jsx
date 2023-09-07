import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from "./migration";
import { Container, Row } from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Jumbotron
        id="experience"
        className="bg-white"
        style={{
          minWidth: "80vw",
          maxWidth: "100vw",
          overflow: "scroll",
        }}
      >
        <h2 className="display-4 mb-5 text-center customheading">
          {experiences.heading}
        </h2>
        <Row>
          {experiences.data.map((data, index) => {
            return <ExperienceCard key={index} data={data} />;
          })}
        </Row>
      </Jumbotron>
    </section>
  );
};

export default Experience;
