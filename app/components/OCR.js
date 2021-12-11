import ImageLoader from "H:/se project/Covid-Pro-Mobile-Frondend - Copy (2)/src/scripts/imageLoader/imageLoader.js";
import "H:/se project/Covid-Pro-Mobile-Frondend - Copy (2)/src/App.css";

import React from "react";

const OCR= () => {
    return (
    <div className="center">
      <h1 className="title">Scan Your License Here</h1>
      <div>
        <ImageLoader />
      </div>
    </div>
  );
}

export default OCR;
