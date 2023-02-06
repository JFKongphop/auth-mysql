import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Home from "./pages/home/Home";

function App() {

    const { user } = useContext(AuthContext);

    const ProtectedRoute = ({ children }) => {
        if (user) {
            return children;
        }

        return <Navigate to='/login'/>
    }


    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <ProtectedRoute>
                    <Outlet/>
                </ProtectedRoute>
            ),
            children: [
                {
                    path: '/',
                    element: <Home/>
                }
            ]
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        }
    ]);


    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;