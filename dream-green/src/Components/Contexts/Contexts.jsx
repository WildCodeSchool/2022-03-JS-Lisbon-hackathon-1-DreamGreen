import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Api from "../Components/API/Api";

const CurrentContext = createContext();

export const CurrentContextProvider = ({ children }) => {
  // const [, ] = useState([])

  return (
    <CurrentContext.Provider
    // value={{
    //     show,
    //     setShow}}
    >
      {children}
    </CurrentContext.Provider>
  );
};

export default CurrentContext;
