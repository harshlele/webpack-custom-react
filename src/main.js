import "./style.css";
import "./style.scss";

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

window.onload = function(){
    document.body.innerHTML += "test";
    ReactDOM.render(<App msg="this is a test" />, document.getElementById("app"))
}

