import React from "react";
import "./Navbar.css";
import { ScrollTo } from "react-scroll-to/dist";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>UCPI</h1>
      <div className="links">
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 1000, smooth: true })}
            >
              Importance
            </a>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 1700, smooth: true })}
            >
              Use Cases
            </a>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 1700, smooth: true })}
            >
              How It Works?
            </a>
          )}
        </ScrollTo>
        <ScrollTo>
          {({ scroll }) => (
            <a
              className="list-item"
              onClick={() => scroll({ y: 3500, smooth: true })}
            >
              FAQs
            </a>
          )}
        </ScrollTo>
      </div>
    </div>
  );
};

export default Navbar;
