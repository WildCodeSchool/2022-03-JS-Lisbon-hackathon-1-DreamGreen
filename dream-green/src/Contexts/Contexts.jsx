import React, { createContext, useState } from "react";

const CurrentContext = createContext();

export const CurrentContextProvider = ({ children }) => {
  const [schedule, setSchedule] = useState();
  const [submitted, setSubmitted] = useState(false);
  // const [, ] = useState([])

  return (
    <CurrentContext.Provider
      value={
        {
          schedule,
          setSchedule,
          submitted,
          setSubmitted
        }
      }
    >
      {children}
    </CurrentContext.Provider>
  );
};

export default CurrentContext;
