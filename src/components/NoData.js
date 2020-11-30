import React from "react";
import "../css/NoData.css";
import no_data from "../assets/no_data.png";
export default function NoData({ label }) {
  return (
    <div className="NoData__Container">
      <img src={no_data} />
      <h1>{label}</h1>
    </div>
  );
}
