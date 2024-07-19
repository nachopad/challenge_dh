import { useContext, useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { InitDataContext } from '../../context/InitDataContext';

function ApplicantDetail() {
    const { id } = useParams();
    const { fetchApplicantById , deleteApplicant } = useContext(InitDataContext);
    const [aspirantId, setAspirantId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAspirant = async () => {
        try {
            const data = await fetchApplicantById(id);
            setAspirantId(data.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
        };

        fetchAspirant();
    }, [id, fetchApplicantById]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar el aspirante: {error.message}</p>;
    if (!aspirantId) {
        return <div>Aspirante no encontrado.</div>;
    }

    const handleDelete = async () => {
        try {
            await deleteApplicant(aspirantId.id);
            alert("Aspirante eliminado correctamente!");
            navigate("/");
        } catch (error) {
            console.error("Error al eliminar el aspirante:", error);
            alert("Error al eliminar el aspirante.");
        }
    };

    return ( 
        <div className="container mt-5">
            <div className="card shadow-lg">
                <div className="card-header text-center bg-primary text-white">
                    <h2>{aspirantId.first_name} {aspirantId.last_name}</h2>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img src={`/assets/images/${aspirantId.image}`} className="img-fluid rounded-circle mb-3" alt={aspirantId.first_name} />
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
                            <button className="btn btn-danger mt-3 ms-3" onClick={handleDelete}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplicantDetail;
