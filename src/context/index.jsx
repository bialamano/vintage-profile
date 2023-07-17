import { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [minimize, setMinimize] = useState(false);
  const [maximize, setMaximize] = useState(false);
  const [close, setClose] = useState(false);

  const closeApp = () => {
    setClose((prevState) => !prevState);
  };

  const minimizeApp = () => {
    setMinimize((prevState) => !prevState);
  };

  const maximizeApp = () => {
    setMaximize((prevState) => !prevState);
  };

  return (
    <Context.Provider
      value={{
        close,
        setClose,
        minimize,
        setMinimize,
        maximize,
        setMaximize,
        minimizeApp,
        closeApp,
        maximizeApp,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
