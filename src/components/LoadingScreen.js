import React from "react";
import loadingGIf from "../assets/bounce.gif";
import "../css/LoadingScreen.css";

export default function LoadingScreen() {
  return (
    <div className="LoadingScreen__Container">
      <img src={loadingGIf} width="500" className="LoadingScreen__Gif" />
      <h1>Loading...</h1>
    </div>
  );
}
