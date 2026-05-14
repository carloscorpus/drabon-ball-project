export interface CharactersResponse {
    items: Item[];
    meta: Meta;
    links: Links;
}

export interface Item {
    id: number;
    name: string;
    ki: string;
    maxKi: string;
    race: string;
    gender: Gender;
    description: string;
    image: string;
    affiliation: Affiliation;
    deletedAt: null;
}

export type Affiliation = 'Z Fighter' | 'Army of Frieza' | 'Freelancer';

export type Gender = 'Male' | 'Female';

export interface Links {
    first: string;
    previous: string;
    next: string;
    last: string;
}

export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
}
