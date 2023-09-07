import React from "react";

import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6" xs="12" sm="12">
      <div
        className="pb-5 cardcontainer "
        style={{
          textAlign: "justify",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <img
          className=" bg-white"
          src={data.companylogo}
          alt=""
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "50%",
          }}
        />
        <p className="lead">
          <b>
            <b style={{ fontSize: "1em" }} className="customheading2">
              {data.role}
            </b>
          </b>
          <br />
          {data.date}
          <br />
        </p>
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      </div>
    </Col>
  );
};

export default ExperienceCard;
