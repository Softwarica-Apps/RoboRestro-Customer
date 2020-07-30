import React, { useState } from "react";
import QrReader from "react-qr-reader";

const ScanQR = () => {
  const [qrValue, setQrValue] = useState(" ");
  const previewStyle = {
    height: "100%",
    width: "100%",
  };

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
        style={previewStyle}
      />
    </div>
  );
};

export default ScanQR;
