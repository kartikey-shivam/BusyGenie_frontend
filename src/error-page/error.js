import React from "react";
import Genie10 from "./../images/Genie10.png";
const Error = () => {
  return (
    <div>
      <div className="error-page">
        <img src={Genie10} alt="" className="genie10-img" />
        <div className="error-container">
          <h1 className="error_heading"> page not found </h1>{" "}
          <p className="error_text">
            {" "}
            Even genie is not able to find your page{" "}
          </p>{" "}
        </div>{" "}
        <div className="circle-con">
          <div className="circle_focus"> </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Error;
