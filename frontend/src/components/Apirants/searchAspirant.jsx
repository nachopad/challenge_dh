import React, { Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Aspirants from './aspirants';

function SearchAspirant() {
    const [aspirants, setAspirants] = useState([]);
    const [filteredAspirants, setFilteredAspirants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();
    const profession = searchParams.get('profession');

    useEffect(() => {
        fetch('http://localhost:3000/api/applicants/')
            .then(response => response.json())
            .then(data => {
                setAspirants(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching aspirants data:', error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (profession) {
            const filtered = aspirants.filter(aspirant =>
                aspirant.professions &&
                aspirant.professions.some(prof => typeof prof === 'object' && prof.title.toLowerCase().includes(profession.toLowerCase()))
            );
            setFilteredAspirants(filtered);
        }
    }, [profession, aspirants]);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <Fragment >
            <section className="content aspirantes content-wrap">
                <h2 className="mt-3 fs-3">Resultado de búsqueda</h2>
                <article className="person-boxes">
                    {
                        !filteredAspirants.length && <p>No hay resultados disponibles</p>
                    }
                    {
                        filteredAspirants.map((aspirant) => (
                            <Aspirants key={aspirant.id} props={aspirant} />
                        ))
                    }
                </article>
            </section>
        </Fragment>
    );
}

export default SearchAspirant;

