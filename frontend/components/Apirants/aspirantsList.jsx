import React, { Fragment, useEffect, useState } from 'react';
import Aspirants from './aspirants';

function AspirantsList() {
    const [aspirants , setaspirants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/applicants/')
            .then(response => response.json())
            .then(data => {
                setaspirants(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching aspirants data:', error);
                setLoading(false);
            });
    }, [ ])

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <Fragment>
            <section className="content aspirantes">
                <h2 className="mt-3 fs-3">Aspirantes</h2>
                <article className="person-boxes">
                    {
                        aspirants.map((aspirant) => (
                            <Aspirants key={aspirant.id} props={aspirant} />
                        ))
                    }
                </article>
            </section>
        </Fragment>
    )
}


export default AspirantsList;