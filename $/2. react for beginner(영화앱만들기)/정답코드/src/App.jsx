import React from "react";
import Detail from "./Detail"
import {
  createBrowserRouter,
  RouterProvider  
} from "react-router-dom";
import Home from "./Home";
import Button from "./Button";

const router = createBrowserRouter([
  {    path: "/",
    element: <Home />,
  },
  {
    path: "/button",
    element: <Button text={"click me"}/>,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

const App = function () {
  return <RouterProvider router={router} />;
};

export default App;
