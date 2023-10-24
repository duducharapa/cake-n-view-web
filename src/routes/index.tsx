import { RouteObject } from "react-router-dom";

import paths from "./paths";
import Landing from "../pages/Landing";
import Cakes from "../pages/Cakes";
import CakePage from "../pages/CakePage";
import api from "../services/api";
import Auth from "../pages/Auth";
import Signup from "../pages/Signup";

const routes: RouteObject[] = [
    {
        path: paths.LANDING,
        element: <Landing />
    },
    {
        path: paths.CAKES,
        element: <Cakes />
    },
    {
        path: paths.CAKE,
        element: <CakePage />,
        loader: async ({ params }) => api.findCake(parseInt(params.id || "0", 10))
    },
    {
        path: paths.AUTH,
        element: <Auth />
    },
    {
        path: paths.SIGNUP,
        element: <Signup />
    }
];

export default routes;
