import { createContext, useContext } from "react";

const NavigationContext = createContext();

//eslint-disable-next-line
function NavigationProvider({ children }) {
  return (
    <NavigationContext.Provider value={{}}>
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error(
      "useNavigation must be used within a NavigationProvider"
    );
  }
  return context;
}

export { NavigationProvider, useNavigation };