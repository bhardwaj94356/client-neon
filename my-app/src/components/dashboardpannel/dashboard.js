import "./dashboard.css";
import React from "react";
import {
  FaBlog,
  FaRegUserCircle,
  FaCartArrowDown,
  FaBell,
  FaRegHeart,
  FaDownload,
  FaSearchLocation,
  FaPowerOff,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <body id="body-pd">
      <header className="header" id="header">
        <div className="header_toggle">
          <i className="bi bi-list color" id="header-toggle"></i>
        </div>
        <div className="header_img">
          <FaPowerOff />
        </div>
      </header>
      <div className="l-navbar" id="nav-bar">
        <nav className="nav">
          <div className="">
            <div href="#" className="nav_logo">
              <FaBlog />
            </div>
            <div className="nav_list">
              <div href="#" className="nav_link active">
                <i className="bx bx-grid-alt nav_icon"></i>
                <span className="nav_name">
                  <FaRegUserCircle />
                </span>
              </div>
              <div href="#" className="nav_link">
                <i className="bx bx-user nav_icon"></i>
                <span className="nav_name">
                  <FaCartArrowDown />
                </span>
              </div>
              <div href="#" className="nav_link">
                <i className="bx bx-message-square-detail nav_icon"></i>
                <span className="nav_name">
                  <FaBell />
                </span>
              </div>
              <div href="#" className="nav_link">
                <i className="bx bx-bookCherry nav_icon"></i>
                <span className="nav_name">
                  <FaRegHeart />
                </span>
              </div>
              <div href="#" className="nav_link">
                <i className="bx bx-folder nav_icon"></i>
                <span className="nav_name">
                  <FaDownload />
                </span>
              </div>
              <div href="#" className="nav_link">
                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>
                <span className="nav_name">
                  <FaSearchLocation />
                </span>
              </div>
            </div>
          </div>
          <div href="#" className="nav_link">
            <i className="bx bx-log-out nav_icon"></i>
            <span className="nav_name">
              <i className="bi bi-power"></i> <FaPowerOff />
            </span>
          </div>
        </nav>
      </div>
    </body>
  );
};
export default Dashboard;
