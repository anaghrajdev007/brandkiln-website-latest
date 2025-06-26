import React, { useState, useEffect } from "react";
import "./module.css";
import {
  FiLogOut,
  FiMap,
  FiAlertCircle,
  FiActivity,
  FiCalendar,
  FiUserPlus,
  FiArchive,
  FiSun,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import imgBk from "../Images/bklogoblack.png";
import imgBkFav from "../Images/Favicon.png";

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const feather = require("feather-icons");
    feather.replace();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center w-100 mainheadder">
        <div className="mainbklogod" onClick={handleClick}>
          <img src={imgBk} />
        </div>

        <div>
          <div
            id="menu-toggle"
            className={`menuToggle ${isOpen ? "open" : "closed"}`}
            onClick={toggleMenu}
          >
            <div id="hamburger" className="hamburger">
              <span className="everything"></span>
              <span className="everything"></span>
              <span className="everything"></span>
            </div>
            <div id="cross" className="cross">
              <span className="everything"></span>
              <span className="everything"></span>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="full-page-header">
          <nav className="orbital-menu">
            <ul className="orbital-menu__list">
              <li className="orbital-menu__item">
                <Link to="/about" className="orbital-menu__link">
                  <span className="orbital-menu__link-icon">About</span>
                  <span className="orbital-menu__link-text">About</span>
                </Link>
              </li>
              <li className="orbital-menu__item">
                <Link to="/strategy" className="orbital-menu__link">
                  <span className="orbital-menu__link-icon">Strategy</span>
                  <span className="orbital-menu__link-text">Strategy</span>
                </Link>
              </li>
              <li className="orbital-menu__item">
                <Link to="/metaverse" className="orbital-menu__link">
                  <span className="orbital-menu__link-icon">Metaverse</span>
                  <span className="orbital-menu__link-text">Metaverse</span>
                </Link>
              </li>
              <li className="orbital-menu__item">
                <Link to="/case-study" className="orbital-menu__link">
                  <span className="orbital-menu__link-icon">Case Study</span>
                  <span className="orbital-menu__link-text">Case Study</span>
                </Link>
              </li>
              <li className="orbital-menu__item">
                <a href="" className="orbital-menu__link">
                  <span className="orbital-menu__link-icon">
                    <FiCalendar />
                  </span>
                  <span className="orbital-menu__link-text">
                    Time & Attendance
                  </span>
                </a>
              </li>
              <li className="orbital-menu__item">
                <a href="" className="orbital-menu__link">
                  <span className="orbital-menu__link-icon">
                    <FiUserPlus />
                  </span>
                  <span className="orbital-menu__link-text">Onboarding</span>
                </a>
              </li>
              <li className="orbital-menu__item">
                <a href="" className="orbital-menu__link">
                  <span className="orbital-menu__link-icon">
                    <FiArchive />
                  </span>
                  <span className="orbital-menu__link-text">
                    HR Information System
                  </span>
                </a>
              </li>
              <li className="orbital-menu__item">
                <a href="" className="orbital-menu__link">
                  <span className="orbital-menu__link-icon">
                    <FiSun />
                  </span>
                  <span className="orbital-menu__link-text">
                    Leaves & Holidays
                  </span>
                </a>
              </li>
            </ul>
            <div className="orbital-menu__center-pic">
              <img src={imgBkFav} alt="" />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default MenuToggle;
