import React from "react";
import loadingGIf from "../assets/bounce.gif";

export default function LoadingScreen() {
  return (
    <div className="loading-container">
      <img src={loadingGIf} width="500" className="loading-gif" />
      <h1>Loading...</h1>
    </div>
  );
}
