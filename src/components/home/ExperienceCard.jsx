import React from "react";

import { Col } from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="6">
      <div className="pb-5 " style={{ textAlign: "justify" }}>
        <img className=" bg-white mb-3" src={data.companylogo} alt="" />
        <p className="lead">
          <b>
            <b>{data.role}</b>
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
