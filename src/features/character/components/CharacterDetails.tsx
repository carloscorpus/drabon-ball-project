import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const CharacterDetails = ({ children }: Props) => {
    return <div className="space-y-12">{children}</div>;
};
