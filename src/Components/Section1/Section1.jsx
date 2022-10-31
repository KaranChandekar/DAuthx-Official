import React from "react";
import "./Section1.css";

const Section1 = () => {
  return (
    <div className="section-1">
      <div className="text">
        <h1>
          <span>On-Chain</span> Identity Bridge
        </h1>
        <p>
          Smart Contract protocol for decentralised Authentication of Web2 Id's
          and user account on Blockchain
        </p>
        <div className="btn-wrapper">
          <button className="btn btn-left">Get Started</button>
          <button className="btn btn-right">How it Works?</button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
