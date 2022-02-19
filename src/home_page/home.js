import React from "react";
import Typical from "react-typical";
import Image from "./../assets/Home/profilephoto.png";
import Layout from "./../component/layout";
import Logo from "./../logo/logo.png";
import { useSelector } from "react-redux";
// import "./Home.css";
// // import homepng from "./../images/homepng.png";
// const Home = () => {
//   return (
//     // <div className="home_con">
//     //   {" "}
//     //   !
//     //   {/* <img
//     //     sr={require("./../images/homepng.png").default}
//     //     height={200}
//     //     width={200}
//     //   /> */}
//     // </div>
//     <div>
//       <div className="home-page">
//         <img src={homepng} alt="" className="homepng-img" />
//       </div>{" "}
//     </div>
//   );
// };
// export default Home;
export default function Home() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      {/* <Layout /> */}
      <div className="Home-container">
        <div className="Home-parent">
          <div className="Home-details">
            <div className="Home-details-name">
              <span className="primary-text1">
                {" "}
                Hello, I'M <span className="highlighted-text">Genie</span>
              </span>
            </div>
            <div className="Home-details-role">
              <span className="primary-text2">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Confused? 🎫",
                      2000,
                      "Managment 🎯",
                      2000,
                      "Why ⏰",
                      2000,
                      "Happy ⏰",
                      2000,
                      "Time ⏰",
                      2000,
                    ]}
                  />
                </h1>
                <span className="Home-role-tagline">
                  Take care of the minutes and the hours will take care of
                  themselves.
                </span>
              </span>
            </div>
            {/* <div className="Home-options"> */}
            {/* <button className="btn primary-btn">{""}Get Started </button> */}
            <a href={user ? "/task" : "/signin"}>
              <button className="btn btn--white">Lets Go</button>
            </a>
            {/* </div> */}
          </div>
          <div className="Home-picture">
            <div className="Home-picture-background">
              <img src={Image} className="Home-picture-background-img" />
            </div>
          </div>
        </div>
      </div>
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">Organize Your Potential </h2>
      </div>

      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  Contact Us
                </span>
              </h4>
              <div class="card__details">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <a href="/contactus">
                  <button className="btn btn--white">Explore</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--2">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--2">
                  Planner
                </span>
              </h4>
              <div class="card__details">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <a href={user ? "/task" : "/signin"}>
                  <button className="btn btn--white">Exlpore</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--3">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--3">
                  Calender
                </span>
              </h4>
              <div class="card__details">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-3">
              <div class="card__cta">
                <a href={user ? "/calendar" : "/signin"}>
                  <button className="btn btn--white">Explore</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="footer__logo-box">
          {/* <picture class="footer__logo">
            <source
              srcset="../images/logo.png 1x"
              media="(max-width: 37.5em)"
            /> */}
          <img src={Logo} alt="Full logo" className="footer__logo" />
          {/* </picture> */}
        </div>
        <div class="row">
          <div class="col-1-of-2">
            <div class="footer__navigation">
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Company
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Contact us
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Carrers
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li class="footer__item">
                  <a href="#" class="footer__link">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-1-of-2">
            <p class="footer__copyright">
              Built by{" "}
              <a href="#" class="footer__link">
                Pragya, Shivam and Lakshay
              </a>{" "}
              as their{" "}
              <a href="#" class="footer__link">
                Winter Project
              </a>
              . Copyright &copy; by Busy Genie Corporation. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
