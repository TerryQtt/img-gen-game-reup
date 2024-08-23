import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./App.css";
import { SignOut } from "./login";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };
  return (
    <div className = "layout">
      <div className="top-left-button-container">
      <button onClick={navigateHome}>
        Home
        <svg
          width="79"
          height="46"
          viewBox="0 0 79 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_618_1123)">
            <path
              d="M42.9 2H76.5L34.5 44H2L42.9 2Z"
              fill="url(#paint0_linear_618_1123)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_618_1123"
              x1="76.5"
              y1="2.00002"
              x2="34.5"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0.6" />
              <stop offset="1" stop-color="white" stop-opacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      
   
    </div>
    <main className = "content">
      {children}
      </main>
    </div>
  );
};

export default Layout;
