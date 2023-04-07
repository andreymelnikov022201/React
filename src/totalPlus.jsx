import { createContext, useState } from "react";

export const totalPlusContext = createContext({});

export const TotalplusContextProvider = (props) => {
  const [totalPlus, settotalPlus] = useState(0);

  const totalPlusChange = (minus: boolean) => {
    settotalPlus((prev) => (minus ? prev - 1 : prev + 1));
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
