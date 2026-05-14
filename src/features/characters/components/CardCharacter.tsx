import { Link, useParams } from 'react-router';
import { parseKi } from '../helpers/clearText';
import type { Item } from '../interfaces/characters.interface';
import '../style.css';
interface Props {
    item: Item;
}

export const CardCharacter = ({ item }: Props) => {
    const { image, name, race, gender, ki, maxKi } = item;
    const kiValue = parseKi(ki);
    const maxKiValue = parseKi(maxKi);

    return (
        <Link to={`/characters/${item.id}`}>
            <li className="bg-surface-light dark:bg-surface-dark rounded-lg border-2 border-bd-light dark:border-bd-dark p-4 cursor-pointer  hover:backdrop-blur-xs hover:bg-surface-dark/50">
                <figure className="w-full ">
                    <img src={image} alt={name} className="w-full h-full min-h-100 max-h-100 object-contain" />
                </figure>
                <div className="pt-4">
                    <div className="text-center ">
                        <h2 className="text-base md:text-3xl font-dbz text-text-primary-light dark:text-text-primary-dark">
                            {name}
                        </h2>
                    </div>
                    <div className="py-2 space-y-2">
                        <p>Ki base {ki}</p>
                        <p>Max ki: {maxKi}</p>
                        <progress
                            className="w-full rounded-sm appearance-none bg-elevated-light dark:bg-elevated-dark"
                            value={kiValue}
                            max={maxKiValue}
                        />
                    </div>
                    <div className="flex  gap-4">
                        <p className="bg-elevated-light dark:bg-elevated-dark px-3 py-1 rounded-lg">{race}</p>
                        <p className="bg-elevated-light dark:bg-elevated-dark px-3 py-1 rounded-lg">{gender}</p>
                    </div>
                </div>
            </li>
        </Link>
    );
};
