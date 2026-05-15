import { axiosApi } from '@/shared/services/axiosApi';
import type { Character } from '../interfaces/character.interface';

export const characterServices = async (id: number) => {
    const dataCharacter = await axiosApi.get<Character>(`/characters/${id}`);
    return dataCharacter.data;
};
