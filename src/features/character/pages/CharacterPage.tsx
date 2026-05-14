import { useParams } from 'react-router';
import { useCharacter } from '../hooks/useCharacter';

export const CharacterPage = () => {
    const { id } = useParams();
    const idItem = Number(id);

    const { data } = useCharacter(idItem);
    console.log(data);
    return <div>CharacterPage</div>;
};
