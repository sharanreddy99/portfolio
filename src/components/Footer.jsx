import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#000000" };

  return (
    <footer style={bgStyle} className="mt-auto py-1 text-center ">
      <Container>{props.children}</Container>
    </footer>
  );
};

export default Footer;
