import React from "react";
import { Component } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import userphoto from "./../../images/user.png";
import Cloud from "./../../images/Layer6.png";
import Genie5 from "./../../images/genie5.png";
const Task_user = () => {
  return (
    <div className="section-1">
      <div className="task_user-back_img">
        <div className="task_user-back_img-1">
          {" "}
          <img
            src={Genie5}
            alt=""
            className="task_user-back_img-1_image"
          />{" "}
        </div>{" "}
        <div className="task_user-back_img-2">
          <img src={Cloud} alt="" className="task_user-back_img-2_image" />
        </div>{" "}
      </div>{" "}
      <div className="task_user-info">
        {" "}
        <div className="task_user-info_nt">
          <div className="task_user-info_nt_name">
            {" "}
            Hi {useSelector((state) => state.custom.name)}, here some task that
            you have to complete.{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Task_user;
