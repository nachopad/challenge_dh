import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const InitDataContext = createContext();

function InitDataProvider({ children }) {
  const [data, setData] = useState({ applicants: null, professions: null });

  useEffect(() => {
    (async function () {
      fetchData();
    })();
  }, []);

  const fetchData = async () => {
    try {
      const applicantsResponse = await axios.get("http://localhost:3000/api/applicants/");
      const professionsResponse = await axios.get("http://localhost:3000/api/professions/");
      setData({ applicants: applicantsResponse.data, professions: professionsResponse.data });
    } catch (error) {
      throw new Error(error);
    }
  }

  const fetchApplicantById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/applicants/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching applicant by ID:', error);
      throw error;
    }
  };

  const createApplicant = async (formData) => {
    try {
      const response = await axios.post("http://localhost:3000/api/applicants/register", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchData();
      return response.data;
    } catch (error) {
      console.error('Error creating applicant:', error);
      throw error;
    }
  };

  const updateApplicant = async (id, formData) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/applicants/update/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error updating applicant:', error);
      throw error;
    }
  };

  const deleteApplicant = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/applicants/${id}`);
      fetchData();
      return response.data;
    } catch (error) {
      console.error('Error deleting applicant:', error);
      throw error;
    }
  };


  return (
    <InitDataContext.Provider value={{ ...data, fetchApplicantById , createApplicant, updateApplicant, deleteApplicant }}>{children}</InitDataContext.Provider>
  );
}

InitDataProvider.propTypes = {
  children: PropTypes.element,
};

export { InitDataContext, InitDataProvider };
