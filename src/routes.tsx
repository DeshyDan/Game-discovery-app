import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GamesDetailPage from "./pages/GamesDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "games/:id" , element:<GamesDetailPage/>},
        ],
    },
]);

export default router;
