import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import "./navigation.css";


const Navigation = props =>{
    return(
        <header className="nav_header">
        <div>
            <h1>
            MV IT solutions
            </h1>
        </div>
        <nav className="elements">
            <ul><li><NavLink to="/login">login</NavLink></li></ul>
            <ul><li><NavLink to="/signup">sign up</NavLink></li></ul>
        </nav>
    </header>
    )
}
export default Navigation