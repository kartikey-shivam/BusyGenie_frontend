import React from "react";
import { Insta } from "./../images/insta.png";
import { In } from "./../images/in.png";
import { Discord } from "./../images/discord.png";
import { Bg2 } from "./../images/bg2.png";
const Person = (props) => {
  return (
    <div className="person-con">
      <div className="person-img"></div>
      <div className="person-con_info">
        <div className="person-con_info-name">{props.Name}</div>
        <div className="person-con_info-icon">
          <div className="person-con_info-icon_img-1"></div>
          <div className="person-con_info-icon_img-2"></div>
          <div className="person-con_info-icon_img-3"></div>
        </div>
      </div>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-con">
        <div className="contact-con_img">
          <img src={Bg2} alt="" className="contact-con_img-1" />
        </div>
        <Person Name="Shivam Saraswat" />
        <Person Name="Pragya Rathore" />
        <Person Name="Lakshay Parashar" />
      </div>
    </div>
  );
};
export default Contact;
