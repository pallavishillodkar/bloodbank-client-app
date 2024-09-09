import React from "react";
import "../style/View.css";
import { Link } from "react-router-dom";
import DonorList from "./DonorList";

const View = () => {
  return (
    <div className="view">
      {/* <h4>View</h4> */}
      <div className="donor-list">
        <DonorList/>
      </div>
    </div>
  );
};

export default View;
