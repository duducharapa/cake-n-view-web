import { RouterProvider, createBrowserRouter } from "react-router-dom";

import routes from "./routes";
import { AuthProvider } from "./hooks/auth";

const App = () => {
    const router = createBrowserRouter(routes);

    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
};

export default App;
