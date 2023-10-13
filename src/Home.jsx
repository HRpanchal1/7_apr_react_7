import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Home (){
    return (
        <>
        {/* <Navbar/> */}
         {/* <h1>Home page</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex similique alias dolorem sed, iure, distinctio excepturi doloribus, provident laboriosam consequuntur facilis atque labore ad tempora. Tempore ducimus facilis soluta ipsam?</p> */}
        <Outlet></Outlet>
        </>
    )
}

export default Home
