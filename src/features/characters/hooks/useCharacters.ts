import { useQuery } from '@tanstack/react-query';
import { charactersServices } from '../services/characters.services';

export const useCharacters = () => {
    const dataCharacters = useQuery({
        queryKey: ['characters'],
        queryFn: charactersServices,
    });

    return dataCharacters;
};
