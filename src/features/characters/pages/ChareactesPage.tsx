import { useCharacters } from '../hooks/useCharacters';

export const ChareactesPage = () => {
    const { data } = useCharacters();
    console.log('data', data);
    return <div>ChareactesPage</div>;
};
