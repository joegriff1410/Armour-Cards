import { createBrowserRouter } from "react-router-dom";
import Login from './pages/LandingPage/LandingPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import SignUpPage from "./pages/SignUpPage/SignUpPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/sign-up',
        element: <SignUpPage />,
        errorElement: <ErrorPage />
    }
]);

export default router;