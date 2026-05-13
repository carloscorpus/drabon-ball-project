import { createBrowserRouter } from 'react-router';
import { Layout } from '../layout/Layout';
import { App } from '../App';

export const routes = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                index: true,
                element: <App />,
            },
        ],
    },
]);
