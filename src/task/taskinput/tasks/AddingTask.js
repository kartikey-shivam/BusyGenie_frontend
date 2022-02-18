import React, { Component } from "react";
import More from "./../../../logo/more.png";
import Checkbox from "./../../../logo/checkbox.png";
// import Add_task from "./../addtask";
import OtherCon from "./other-con";
const AddingTask = (props) => {
  return (
    <div className="tasks-name">
      <div className="tasks-name_container" onClick={props.Clicked}>
        <div className="status-dot"> </div>{" "}
        <div className="status">
          <input type="checkbox" name="" value="" />{" "}
          <span className="status-span"> </span>{" "}
          {/* <img src={Checkbox} alt="" className="status_img" /> */}{" "}
        </div>{" "}
        <div className="taskName"> {props.Name} </div>{" "}
        <div className="tasks-name_container-date"> {props.Date} </div>{" "}
      </div>{" "}
    </div>
  );
};

export default AddingTask;
