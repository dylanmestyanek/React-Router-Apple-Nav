import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; 

const Page = (props) => {
    const obj = props.data.find(item => item.title === props.match.params.title);
    const [productList, setProductList] = useState(obj);

    useEffect(() =>
        setProductList(obj)
    , [props.match.params.title]);

    return (
        <div className="apple-products">
           {Object.values(productList.content).map(item => <NavLink>{item}</NavLink>)}
        </div>
    );
};

export default Page;