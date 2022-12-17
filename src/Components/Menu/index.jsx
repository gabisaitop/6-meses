import React from "react";
import { NavContainer } from "./style";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Menu() {
    const calendar = require(`./assets/calendar.png`)
    const gallery = require(`./assets/gallery.png`)
    const home = require(`./assets/house.png`)

    return (
        <>
            <NavContainer>
                <Link to="/home"><img src={home} alt='Home Page' style={{width : '35px'}}/></Link>
                <Link to="/dates"><img src={calendar} alt='Dates Page' /></Link>
                <Link to="/gallery"><img src={gallery} alt='Gallery Page' /></Link>
            </NavContainer>
        </>
    )
}