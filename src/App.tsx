import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import routes from "./routes";
import { AuthProvider } from "./hooks/auth";

const App = () => {
    const router = createBrowserRouter(routes);

    return (
        <AuthProvider>
            <ToastContainer
                autoClose={2000}
                hideProgressBar
                newestOnTop
            />
            <RouterProvider router={router} />
        </AuthProvider>
    );
};

export default App;
