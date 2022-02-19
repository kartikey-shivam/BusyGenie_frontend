import React, { Component } from "react";
import { useSelector } from "react-redux";
import More from "./../../../logo/more.png";
import Checkbox from "./../../../logo/checkbox.png";
// import Add_task from "./../addtask";
import OtherCon from "./other-con";
const AddingTask = (props) => {
  let color = false;
  if (props.precedence == "orange") {
    color = true;
  } else {
    color = false;
  }
  console.log(color);
  return (
    <div className="tasks-name">
      <div className="tasks-name_container" onClick={props.Clicked}>
        <div
          className="status-dot"
          style={{ "background-color": color ? "orange" : "red" }}
        >
          {" "}
        </div>{" "}
        <div className="status">
          {/* <input type="checkbox" name="" value="" />{" "} */}
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
