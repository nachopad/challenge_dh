import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

function AspirantsDetailID() {
    const [aspirants, setAspirants] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch('http://localhost:3000/api/applicants/')
            .then(response => response.json())
            .then(data => {
                console.log('Datos para detalle:', data); 
                setAspirants(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching aspirants data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Cargando...</div>;
    }

    const aspirantId = aspirants.find((aspirant) => aspirant.id.toString() === id);

    if (!aspirantId) {
        return <div>Aspirante no encontrado</div>;
    }

    return ( <div className="container mt-5">
        <div className="card shadow-lg">
            <div className="card-header text-center bg-primary text-white">
                <h2>{aspirantId.first_name} {aspirantId.last_name}</h2>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={`../src/assets/img/${aspirantId.image}`} className="img-fluid rounded-circle mb-3" alt={aspirantId.first_name} />
                    </div>
                    <div className="col-md-8">
                        <h5 className="card-title">Información Personal</h5>
                        <ul className="list-unstyled">
                            <li><strong>Género:</strong> {aspirantId.gender}</li>
                            <li><strong>Fecha de Nacimiento:</strong> {aspirantId.birthdate}</li>
                            <li><strong>DNI:</strong> {aspirantId.dni}</li>
                            <li><strong>Email:</strong> {aspirantId.email}</li>
                            <li><strong>Teléfono:</strong> {aspirantId.phone}</li>
                            <li><strong>LinkedIn:</strong> <a href={aspirantId.url_linkedin} target="_blank" rel="noopener noreferrer">{aspirantId.url_linkedin}</a></li>
                        </ul>
                        <h5 className="card-title">Profesiones</h5>
                        <ul className="list-group">
                            {aspirantId.professions.map((profession) => (
                                <li key={profession.id} className="list-group-item">
                                    <h6>{profession.title}</h6>
                                    <p>{profession.description}</p>
                                </li>
                            ))}
                        </ul>

                        <NavLink to="/" className="btn btn-primary mt-3 ">Volver</NavLink>

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default AspirantsDetailID;
