import { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Applicants from './Applicants';
import { InitDataContext } from '../../context/InitDataContext';

function SearchAspirant() {
    const { applicants } = useContext(InitDataContext);

    const [filteredAspirants, setFilteredAspirants] = useState([]);
    const [searchParams] = useSearchParams();
    const profession = searchParams.get('profession');

    useEffect(() => {
        if (profession && applicants?.data) {
            const filtered = applicants.data.filter(aspirant =>
                aspirant.professions &&
                aspirant.professions.some(prof => typeof prof === 'object' && prof.title.toLowerCase().includes(profession.toLowerCase()))
            );
            setFilteredAspirants(filtered);
        } else {
            setFilteredAspirants([]);
        }
    }, [profession, applicants]);

    if (!applicants) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <section className="content aspirantes content-wrap">
                <h2 className="mt-3 fs-3">Resultado de búsqueda</h2>
                <article className="person-boxes">
                    {
                        !filteredAspirants.length && <p>No hay resultados disponibles</p>
                    }
                    {
                        filteredAspirants.map((aspirant) => (
                            <Applicants key={aspirant.id} props={aspirant} />
                        ))
                    }
                </article>
            </section>
        </>
    );
}

export default SearchAspirant;

