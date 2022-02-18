import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import logoimg from "../images/logo";
import Signup from "../signup-in/signup";
import Sign_in from "./../signup-in/signin";
import Task from "./../task/task";
import List from "../logo/list.png";
// const Nav = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar_content"> navbar </div>{" "}
//     </div>
//   );
// };
const Layout = (props) => {
  return (
    <div>
      {/* <div className="navbar-list">
        <div className="navbar-list_con">
          <div className="navbar_content">
            <img src={List} alt="" className="navbar-list_img" />
            <ul className="navbar_content_item"> Home </ul>{" "}
            <ul className="navbar_content_item">
              {" "}
              <Link to={{ pathname: "/task" }}> Tasks </Link>{" "}
            </ul>{" "}
            <ul className="navbar_content_item">
              <Link to={{ pathname: "/about" }}>About</Link>
            </ul>{" "}
            <ul className="navbar_content_item"> Contact Us </ul>{" "}
            <div
              type="#"
              className="signup-btn navbar_content_item navbar_content_item-btn "
            >
              {" "}
              <Link to="/signin"> Log In </Link>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      <div className="navbar">
        <div className="navbar_content">
          <div className="logo">
            <img src={logoimg} alt="logo" className="logo_img" />
          </div>{" "}
          <ul className="navbar_content_item"> Home </ul>{" "}
          <ul className="navbar_content_item">
            {" "}
            <Link to={{ pathname: "/task" }}> Tasks </Link>{" "}
          </ul>{" "}
          <ul className="navbar_content_item">
            <Link to={{ pathname: "/about" }}>About</Link>
          </ul>{" "}
          <ul className="navbar_content_item"> Contact Us </ul>{" "}
          <div
            type="#"
            className="signup-btn navbar_content_item navbar_content_item-btn "
          >
            {" "}
            <Link to="/signin"> Log In </Link>{" "}
          </div>{" "}
        </div>{" "}
  </div>{" "} */}
      <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />

        <label for="navi-toggle" class="navigation__button">
          <span class="navigation__icon">&nbsp;</span>
        </label>

        <div class="navigation__background">&nbsp;</div>

        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item">
              <a href="/" class="navigation__link">
                <span>01</span>Home
              </a>
            </li>
            <li class="navigation__item">
              <a href="/task" class="navigation__link">
                <span>02</span>Tasks
              </a>
            </li>
            <li class="navigation__item">
              <a href="/signin" class="navigation__link">
                <span>03</span>Log In
              </a>
            </li>
            <li class="navigation__item">
              <a href="/signup" class="navigation__link">
                <span>04</span>Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/signin" exact element={<Sign_in />} />{" "}
        <Route path="/task" exact element={<Task />} />{" "}
      </Routes>{" "}
    </div>
  );
};

export default Layout;
