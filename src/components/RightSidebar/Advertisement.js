import React, { useState } from "react";
import AdvertisementImage from "../../assets/images/advertisement.jpg";

const Advertisement = () => {
  const [showAdvertisement, setShowAdvertisement] = useState(true);
  const handleCloseAdvertisement = () => {
    setShowAdvertisement(false);
  };
  if (!showAdvertisement) {
    return;
  }
  return (
    <>
      <div className="right-sidebar-title">
        <h4>Advertisement</h4>
        <button onClick={handleCloseAdvertisement}>Close</button>
      </div>
      <img src={AdvertisementImage} className="advertisement" alt="ads" />
    </>
  );
};

export default Advertisement;
