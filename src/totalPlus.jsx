import { createContext, useState } from "react";

export const totalPlusContext = createContext({});

export const TotalplusContextProvider = (props) => {
  const [totalPlus, settotalPlus] = useState("");

  const totalPlusChange = (newtotalPlus) => {
    settotalPlus(newtotalPlus);
  };

  const totalPlusState = {
    totalPlus,
    totalPlusChange,
  };

  return (
    <totalPlusContext.Provider value={totalPlusState}>
      {props.children}
    </totalPlusContext.Provider>
  );
};
