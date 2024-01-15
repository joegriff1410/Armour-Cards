import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterProvider router={router} />
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        </ChakraProvider>
    </React.StrictMode>
);
