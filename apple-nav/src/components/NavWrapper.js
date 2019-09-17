import React from "react";
import { Route, Link } from "react-router-dom";

import Nav from "./Nav";

const NavWrapper = () => {
    return (
        <div>
            <Nav title="Mac">Mac</Nav>
            <Nav title="iPad">iPad</Nav>
            <Nav title="iPhone">iPhone</Nav>
            <Nav title="Watch">Watch</Nav>
            <Nav title="TV">TV</Nav>
            <Nav title="Music">Music</Nav>
            <Nav title="Support">Support</Nav>
            <Nav title="Search">Search</Nav>
            <Nav title="Cart">Cart</Nav>

        </div>
    )
}

export default NavWrapper;