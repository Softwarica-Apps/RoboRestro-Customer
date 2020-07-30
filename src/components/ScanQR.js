import React, { useState } from "react";
import QrReader from "react-qr-reader";

const ScanQR = () => {
  const [qrValue, setQrValue] = useState(" ");

  const handleScan = (data) => {
    if (data) {
      setQrValue(data);
      alert(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
    alert(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{qrValue}</p>
    </div>
  );
};

export default ScanQR;
