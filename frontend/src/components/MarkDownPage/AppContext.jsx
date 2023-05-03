import { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    // define initial state values here
  });

  // define any functions or methods to update state here

  const context = {
    state,
    // pass any functions or methods to update state in this object
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContext;
