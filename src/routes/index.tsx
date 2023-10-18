import { RouteObject } from "react-router-dom";

import paths from "./paths";
import Landing from "../pages/Landing";
import Cakes from "../pages/Cakes";

const routes: RouteObject[] = [
    {
        path: paths.LANDING,
        element: <Landing />
    },
    {
        path: paths.CAKES,
        element: <Cakes />
    }
];

export default routes;
