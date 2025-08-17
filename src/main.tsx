import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";

import App from "./App.tsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
        ],
    },
    {
        path: "*",
        element: (
            <div>
                <h1>404 — Страница не найдена</h1>
            </div>
        ),
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
);
