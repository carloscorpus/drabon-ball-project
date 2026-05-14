import { createBrowserRouter } from 'react-router';
import { Layout } from '@/app/layout/Layout';
import { ChareactersPage } from '@/features/characters/pages/ChareactersPage';
import { CharacterPage } from '@/features/character/pages/CharacterPage';

export const routes = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                index: true,
                element: <ChareactersPage />,
            },
            {
                path: 'characters/:id',
                element: <CharacterPage />,
            },
        ],
    },
]);
