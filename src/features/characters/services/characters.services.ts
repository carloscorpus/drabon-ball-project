import { axiosApi } from '@/shared/services/axiosApi';
import type { CharactersResponse } from '../interfaces/characters.interface';

export const charactersServices = async () => {
    const data = await axiosApi.get<CharactersResponse>('/characters');
    return data;
};
