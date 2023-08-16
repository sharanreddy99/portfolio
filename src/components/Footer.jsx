import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = {
    backgroundColor: "#000000",
    minWidth: "100vw",
    maxWidth: "100vw",
  };

  return (
    <footer style={bgStyle} className="text-center">
      <Container>{props.children}</Container>
    </footer>
  );
};

export default Footer;
