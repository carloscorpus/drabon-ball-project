import { CardsCharacters } from '../components/CardsCharacters';
import { useCharacters } from '../hooks/useCharacters';

export const ChareactesPage = () => {
    const { data, isLoading, isError } = useCharacters();

    const dataCharacters = data?.data.items || [];
    return (
        <>
            <section>
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error...</p>}
                <CardsCharacters dataCharacters={dataCharacters} />
            </section>
        </>
    );
};
