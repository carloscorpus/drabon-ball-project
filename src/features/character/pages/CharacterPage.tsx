import { useParams } from 'react-router';
import { useCharacter } from '../hooks/useCharacter';
import LoadingImage from '@/assets/images/loading-img.png';
import LogoImage from '@/assets/images/goku-traste-not-datils.png';
import { CharacterDetails } from '../components/CharacterDetails';
import { SingleDetailes } from '../components/SingleDetailes';
import { Transformations } from '../components/Transformations';
export const CharacterPage = () => {
    const { id } = useParams();
    const idItem = Number(id);

    const { data, isLoading, isError } = useCharacter(idItem);

    const { transformations } = data || {};

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen relative">
                <img src={LoadingImage} alt="Loading" className="object-contain animate-[spin_8s_linear_infinite]" />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="flex flex-col justify-center items-start h-screen relative">
                <img src={LogoImage} alt="Logo" className="object-contain" />
            </div>
        );
    }

    return (
        <main>
            <CharacterDetails>
                <SingleDetailes data={data} />
                <Transformations transformations={transformations} />
            </CharacterDetails>
        </main>
    );
};
