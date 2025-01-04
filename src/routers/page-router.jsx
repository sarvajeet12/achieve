import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home.jsx";
import ErrorPage from "../pages/error.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <Home /> },
            { path: "*", element: <ErrorPage /> },
        ],
    },
]);
