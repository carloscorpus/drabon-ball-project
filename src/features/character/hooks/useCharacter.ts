import { useQuery } from '@tanstack/react-query';
import { characterServices } from '../services/character.services';

export const useCharacter = (id: number) => {
    console.log(id);
    const dataCharacter = useQuery({
        queryKey: ['character', id],
        queryFn: () => characterServices(id),
    });

    return dataCharacter;
};
