import React from "react";
import { NavLink, Route } from "react-router-dom";

const Nav = ({
    title,
    setTitle,
    setProducts
}) => {
    return (
        <>
            <NavLink to={`/${title}`} onClick={() => {
                setTitle(title)
                setProducts([])
            }}>{title}</NavLink>
        </>
    );
};

export default Nav;
