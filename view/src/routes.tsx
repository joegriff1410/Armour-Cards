import { createBrowserRouter } from "react-router-dom";
import Login from './pages/LandingPage/LoginPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: ''
    }
]);

export default router;