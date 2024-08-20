```Javascript index.js
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.js";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
    },
]);

const root = document.querySelector("root");
ReactDOM.createRoot(root).render(
    <RouterProvider router={router} />
);

```

document.querySelector("");
==> 
.className
#id