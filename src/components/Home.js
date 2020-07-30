import React, { useState } from "react";
import { Container, Button } from "reactstrap";
import Header from "../images/header.jpg";
import Logo from "../images/logo.png";
import ScanQR from "./ScanQR";

const Home = () => {
  const [scanning, setScanning] = useState(false);

  const handleButton = () => {
    setScanning(true);
  };

  return (
    <div className="page-header clear-filter" filter-color="blue">
      <div
        className="page-header-image"
        style={{
          backgroundImage: "url(" + Header + ")",
        }}
      ></div>
      <Container className="mt-5 rr-branding">
        <div className="content-center brand">
          <img alt="..." className="n-logo" src={Logo} />
          <p className="h3">Welcome to ROBORESTRO</p>
          {scanning ? (
            <ScanQR />
          ) : (
            <Button
              className="btn-round btn-scan-qr mt-5"
              size="lg"
              onClick={handleButton}
            >
              SCAN QR CODE
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Home;
