import React from "react";
import { Container, Button } from "reactstrap";
import Header from "../images/header.jpg";
import Logo from "../images/logo.png";

const Home = () => {
  return (
    <div className="page-header clear-filter" filter-color="blue">
      <div
        className="page-header-image"
        style={{
          backgroundImage: "url(" + Header + ")",
        }}
      ></div>
      <Container className="mt-5">
        <div className="content-center brand">
          <img alt="..." className="n-logo" src={Logo} />
          <h1 className="h1-seo">roborestro</h1>
          <Button color="primary">Scan QR</Button>
        </div>
      </Container>
    </div>
  );
};

export default Home;
