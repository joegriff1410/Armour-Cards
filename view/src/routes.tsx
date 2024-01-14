import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import FlashCardsPage from './pages/FlashCardsPage/FlashCardsPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LandingPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/sign-up',
        element: <SignUpPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/flash-cards',
        element: <FlashCardsPage />,
        errorElement: <ErrorPage />,
    },
]);

export default router;
