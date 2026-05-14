import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router';
import { routes } from './app/routes/routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={routes} />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </StrictMode>,
);
