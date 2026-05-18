import { parseKi } from '@/features/characters/helpers/clearText';
import type { Character } from '../interfaces/character.interface';

import NotFound from '@/assets/images/image-not-found.webp';

interface Props {
    data: Character | undefined;
}

export const SingleDetailes = ({ data }: Props) => {
    const { image, name, ki, maxKi, race, gender, description, affiliation, originPlanet } = data || {};
    const kiValue = parseKi(ki || '');
    const maxKiValue = parseKi(maxKi || '');

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <figure className="relative flex justify-center h-full max-h-160 bg-elevated-light dark:bg-elevated-dark rounded-2xl p-4">
                <p className="absolute left-0 bottom-0 [writing-mode:vertical-rl] rotate-180 font-dbz text-9xl text-[#d6d6d6] dark:text-[#292929] -z-10">
                    {name}
                </p>
                <img src={image ?? NotFound} alt={name} className="object-cover h-full" />
            </figure>

            <div className="space-y-4 text-base md:text-xl">
                <h1 className="font-dbz text-4xl md:text-5xl lg:text-7xl text-text-primary-light dark:text-text-primary-dark">
                    {name}
                </h1>
                <p>
                    Ki base {ki} / MaxKi : {maxKi}
                </p>
                <progress
                    className="w-full rounded-sm appearance-none bg-elevated-light dark:bg-elevated-dark"
                    value={kiValue}
                    max={maxKiValue}
                />
                <p>
                    Race:
                    <span className="ml-2 border border-bd-dark p-1 rounded-sm bg-surface-light dark:bg-surface-dark">
                        {race}
                    </span>
                </p>
                <p>
                    Gender:
                    <span className="ml-2 border border-bd-dark p-1 rounded-sm bg-surface-light dark:bg-surface-dark">
                        {gender}
                    </span>
                </p>
                <p>
                    Group:
                    <span className="ml-2 border border-bd-dark p-1 rounded-sm bg-surface-light dark:bg-surface-dark">
                        {affiliation}
                    </span>
                </p>
                <p>{description}</p>

                {originPlanet && (
                    <div className="flex flex-row gap-4 items-start">
                        <figure>
                            <img
                                src={originPlanet?.image ?? NotFound}
                                alt={originPlanet?.name}
                                className="w-30 h-30 object-cover rounded-lg"
                            />
                        </figure>
                        <div>
                            <p>Origin Planet: {originPlanet.name}</p>
                            <p>Status: {originPlanet.isDestroyed ? 'Destroyed' : 'Active'}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
