import { useContext } from 'react';
import Applicants from './Applicants';
import { InitDataContext } from '../../context/InitDataContext';

function ApplicantsList() {
    const { applicants } = useContext(InitDataContext);

    if (!applicants) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <section className="content aspirantes">
                <h2 className="mt-3 fs-3">Aspirantes</h2>
                <article className="person-boxes">
                    {
                        applicants?.data?.map((applicant, index) => (
                            <Applicants key={index} props={applicant} />
                        ))
                    }
                </article>
            </section>
        </>
    )
}

export default ApplicantsList;