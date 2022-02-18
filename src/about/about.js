import React from "react";
import About_img from "./../images/about.png";
import Genie13 from "./../images/genie13.png";
import Genie11 from "./../images/genie11.png";
import Genie12 from "./../images/genie12.png";

const About = () => {
  return (
    <div className="about">
      {/* <img src={About_img} alt="" className="about_img" /> */}
      <h2 className="about_heading">About</h2>
      <div className="about_con">
        <div className="about_con-info">
          <div className="about_con-info_img">
            <img src={Genie13} alt="" className="about_con-info_img-1" />
          </div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident."
          </p>
        </div>
        <div className="about_con-info">
          <div className="about_con-info_img">
            <img src={Genie11} alt="" className="about_con-info_img-1" />
          </div>
          <p className="about_con-info_p">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non
            proident."
          </p>
        </div>
        <div className="about_con-info">
          <div className="about_con-info_img">
            <img src={Genie12} alt="" className="about_con-info_img-1" />
          </div>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident."
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
