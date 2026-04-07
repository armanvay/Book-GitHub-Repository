import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayOut from "./Comoonent/MainLayOut/MainLayOut";
import Home from "./Comoonent/Home/Home";
import HistoryBook from "./Comoonent/HistoryBook/HistoryBook";
import DetailsCard from "./Comoonent/Home/DetailsCard";
import GlobalProvider from "./Comoonent/CustomApiHook/CustomApiHook";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      { index: true, Component: Home },
      { path: "/History", Component: HistoryBook },
      { path: "/Details/:Id" , loader:()=>fetch("/booksData.json"),Component:DetailsCard},
    ],
  },
]);






createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>
);
