/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Aspirants = ( {props} ) => {
    return (
        <> 
          <NavLink to={`/applicant/${props.id}`} className="text-decoration-none">             
            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="box-avatar">
                <img src={`http://localhost:3000/images/applicantProfile/${props.image}`} alt={props.first_name} />
              </div>
              <div className="box-bio">
                <h2 className="bio-name">{props.first_name} {props.last_name}</h2>
                <p className="bio-position">
                    {props.professions.map(profession => (
                        <span key={profession.id}>{profession.title}<br /></span>
                    ))}
                </p>
              </div>
              <div className="box-actions">
                <button>
                  <i className="bi bi-star"></i>
                </button>
                <button>
                  <i className="bi bi-chat"></i>
                </button>
                <button>
                  <i className="bi bi-envelope"></i>
                </button>
              </div>
            </div>
          </NavLink>
        </>
    );
}   
Aspirants.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    professions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired
  })
}
export default Aspirants;