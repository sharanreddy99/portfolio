import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";
import Collapse from "react-bootstrap/Collapse";
import { Button, Card, Col } from "react-bootstrap";

function CustomCollapse({ label, data }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Col md={10}>
        <Card
          className="card shadow-lg p-3 mb-5 bg-white rounded"
          onClick={() => setOpen(!open)}
        >
          <Card.Body>
            <Card.Title as="h5">{label} </Card.Title>
            <Collapse in={open}>
              <div
                id="example-collapse-text"
                dangerouslySetInnerHTML={{ __html: data }}
              ></div>
            </Collapse>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

const Leadership = ({ heading, messageArr, img, imageSize }) => {
  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
      <div className="row">
        <div className="col-md-5">
          {messageArr.map((message) => (
            <CustomCollapse label={message.label} data={message.data} />
          ))}
        </div>
        <div className="col-md-7">
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={value.img}
                    alt="First slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>{value.paragraph}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
