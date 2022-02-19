import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Background from "./../../images/back_show.png";
import InkPen from "./../../images/pen.png";
import axios from "axios";
import TimeBox from "./../timebar/time";
const Show = () => {
  const dispatch = useDispatch();
  const taskName = useSelector((state) => state.custom.taskName);
  const dateOfFinalization = useSelector(
    (state) => state.custom.dateOfFinalization
  );
  const id = useSelector((state) => state.custom.id);
  const comment = useSelector((state) => state.custom.comment);
  const markAsDone = useSelector((state) => state.custom.markAsDone);
  const deleteHandler = () => {
    // console.log(id);
    axios.delete(`http://localhost:8000/api/v1/timeEntry/${id}`);
  };
  const markAsDonefunc = () => {
    if (markAsDone) {
      axios.put(`http://localhost:8000/api/v1/timeEntry/${id}`, id, {
        markAsDone: false,
      });
    } else {
      axios.put(`http://localhost:8000/api/v1/timeEntry/${id}`, id, {
        markAsDone: true,
      });
    }
  };
  const msd = useSelector((state) => state.markAsDone);
  const mark = msd ? "mark as undone" : "mark as done";
  return (
    <div className="task_show">
      <div className="back">
        <img src={Background} alt="" className="back_img" />
      </div>
      <div className="show-con">
        <div className="show-main_heading">Task Info</div>
        <div className="show-con_box">
          <h3 className="show-con_box_heading">Task Name</h3>
          <p className="show-con_box_content">{taskName}</p>
        </div>
        <div className="show-con_box">
          <h3 className="show-con_box_heading">Submit date</h3>
          <p className="show-con_box_content">{dateOfFinalization}</p>
        </div>
        <div className="show-con_box">
          <h3 className="show-con_box_heading">Comment</h3>
          <p className="show-con_box_content">{comment}</p>
        </div>
        <div className="show-con_box">
          <h3 className="show-con_box_heading">Time status</h3>
          <p className="show-con_box_content">23 hrs</p>
        </div>
      </div>
      <div className="timeBox">
        <TimeBox />
      </div>
      <div className="show-btn">
        <button type="" className="show-btn-1" onClick={markAsDonefunc}>
          {mark}
        </button>
        <button type="" className="show-btn-1" onClick={deleteHandler}>
          <a href="/task">Delete</a>
        </button>
      </div>
      <div className="ink-pen">
        <img src={InkPen} alt="" className="ink-pen_img" />
      </div>
    </div>
  );
};
export default Show;
