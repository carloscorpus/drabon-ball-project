import { createBrowserRouter } from 'react-router';
import { Layout } from '@/app/layout/Layout';
import { ChareactesPage } from '@/features/characters/pages/ChareactesPage';

export const routes = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                index: true,
                element: <ChareactesPage />,
            },
        ],
    },
]);
