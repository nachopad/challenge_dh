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
                <h2 className="mt-2 mb-2 fs-4 text-white bg-primary p-3 rounded-top">Aspirantes</h2>
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