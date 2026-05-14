import type { Item } from '../interfaces/characters.interface';
import { CardCharacter } from './CardCharacter';

interface Props {
    dataCharacters: Item[];
}

export const CardsCharacters = ({ dataCharacters }: Props) => {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dataCharacters.length === 0 ? (
                <p>No hay personajes</p>
            ) : (
                dataCharacters.map((item) => {
                    return <CardCharacter key={item.id} item={item} />;
                })
            )}
        </ul>
    );
};
