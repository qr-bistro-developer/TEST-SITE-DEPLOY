import { createContext, useContext } from "react";

const ConfigContext = createContext();

export const useSocketContext = () => {
  return useContext(ConfigContext);
};

export default ConfigContext;
