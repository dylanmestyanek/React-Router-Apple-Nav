import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 

const Page = (props) => {
    const obj = props.data.find(item => item.title === props.match.params.title);
    
    if (obj.content) {
        for (let product in obj.content){
            props.products.push(<NavLink>{obj.content[product]}</NavLink>)
        }
    }

    return (
        <div className="apple-products">
           {props.products}
        </div>
    );
};

export default Page;