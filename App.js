import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Err from "./src/components/Err";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Shimmer from "./src/components/Shimmer";
import appStore from "./src/utils/appStore";
import { Provider } from "react-redux";

const Grocery = lazy(()=> import("./src/components/Grocery"));

const AppLayout = () => {

    return (
        <Provider store={appStore}>
            <div>
                <Header />
                <Outlet />  {/* This renders child components dynamically */}
            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Err />, 
        children: [
            {
                path: "", 
                element: <Body />,
            },
            {
                path: "about", 
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "grocery",
                element: <Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
            },
            {
                path: "restaurant/:resId",
                element: <RestaurantMenu />,
            }
        ],
    },    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
