import "./style.css";
import "./style.scss";

import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

window.onload = function(){
    document.body.innerHTML += "onload";
    ReactDOM.render(<App msg1="Loaded as separate resource" msg2="inlined" />, document.getElementById("app"))
}

