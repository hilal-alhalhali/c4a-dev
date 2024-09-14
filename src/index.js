import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Home from "./pages/home";
// import Html from "./pages/html";
// import Css from "./pages/css";
// import Javascript from "./pages/javascript";
// /* previous imports */
// // import ErrorPage from "./error-page";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <h1>Sorrrrrrrrrrrrrrrry Thre is no Page</h1>,
//     // errorElement: <ErrorPage />,
//   },
//   {
//     path: "/html",
//     element: <Html />,
//     errorElement: <h1>Sorrrrrrrrrrrrrrrry Thre is no Page</h1>,
//     // errorElement: <ErrorPage />,
//   },
//   {
//     path: "/css",
//     element: <Css />,
//     errorElement: <h1>Sorrrrrrrrrrrrrrrry Thre is no Page</h1>,
//     // errorElement: <ErrorPage />,
//   },
//   {
//     path: "/javascript",
//     element: <Javascript />,
//     errorElement: <h1>Sorrrrrrrrrrrrrrrry Thre is no Page</h1>,
//     // errorElement: <ErrorPage />,
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
