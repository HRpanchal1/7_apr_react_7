import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import { Suspense } from "react";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Example from "./Example";
const Classroutes = lazy(() => import("./Classcompo/Classroutes"))
const Functionroutes = lazy(() => import("./Functioncompo/Functionroutes"))

const Mainrouter = createBrowserRouter([

    {
        path: "/",
        element: <><Navbar /><Home /></>
    },
    {
        path: "/about",
        element: <><Navbar />
            <Suspense fallback={<h1>Loading</h1>}>
                <About />
            </Suspense>
        </>
    },
    {
        path: "/contact",
        element: <><Navbar /> <Contact /></>
    },
    {
        path: "/product",
        element: <><Navbar /> <Product /></>
    },
    {
        path: "/example",
        element: <><Navbar /><Example /></>,
        children: [

            {
                path : "Classcompo/*",
                element : <Suspense fallback={<h2>Loading...</h2>}><Classroutes/></Suspense>
            },
            {
                path : "Functioncompo/*",
                element : <Suspense fallback={<h2>Loading...</h2>}><Functionroutes/></Suspense>
            }

        ]
    }

])

export default Mainrouter