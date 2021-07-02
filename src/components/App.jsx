import React from "react";
import Blue from "../assets/blue.png";
import Logo from "../assets/logo.png";

export default (props) => {
    return (
        <>
            <img src={Blue} alt="blue" />
            <div style={{color: "skyblue"}}>
                {props.msg1}
            </div>
            <img src={Logo} alt="blue" />
            <div style={{color: "skyblue"}}>
                {props.msg2}
            </div>
        </>
    );
}