import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GamesDetailPage from "./pages/GamesDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement:<ErrorPage/>,
        children: [
            { index: true, element: <HomePage /> },
            { path: "games/:id" , element:<GamesDetailPage/>},
        ],
    },
]);

export default router;
