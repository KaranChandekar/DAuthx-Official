import React from "react";
import "./Section4.css";
import Lottie from "react-lottie";
import google from "../google.json";
import transaction from "../transaction.json";
import verify from "../verify.json";
import smartContact from "../smartcontact.json";
import done from "../done.json";

const Section4 = () => {
  const goOpt = {
    loop: true,
    autoplay: true,
    animationData: google,
  };
  const transOpt = {
    loop: true,
    autoplay: true,
    animationData: transaction,
  };
  const verOpt = {
    loop: true,
    autoplay: true,
    animationData: verify,
  };
  const smartOpt = {
    loop: true,
    autoplay: true,
    animationData: smartContact,
  };
  const doneOpt = {
    loop: true,
    autoplay: true,
    animationData: done,
  };
  return (
    <div className="section-4" id="howitworks">
      <h1>How it works?</h1>

      <a href="" className="doc-link">
        Learn More
      </a>
    </div>
  );
};

export default Section4;
