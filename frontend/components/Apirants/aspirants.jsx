/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';


const Aspirants = ( {props} ) => {
    return (
        <> 
          <NavLink to={`/aspirant/${props.id}`} className="text-decoration-none">             
            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
              <div className="box-avatar">
                <img src={`../src/assets/img/${props.image}`} alt="Gloria" />
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

export default Aspirants;