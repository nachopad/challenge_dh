import { createContext, useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const InitDataContext = createContext();

function InitDataProvider({ children }) {
  const [data, setData] = useState({ applicants: null, professions: null });

  useEffect(() => {
    (async function () {
      try {
        const applicantsResponse = await axios.get("http://localhost:3000/api/applicants/");
        const professionsResponse = await axios.get("http://localhost:3000/api/professions/");
        setData({ applicants: applicantsResponse.data, professions: professionsResponse.data });
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);

  return (
    <InitDataContext.Provider value={data}>{children}</InitDataContext.Provider>
  );
}

InitDataProvider.propTypes = {
  children: PropTypes.element,
};

export { InitDataContext, InitDataProvider };
