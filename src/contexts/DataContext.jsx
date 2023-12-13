import { createContext, useContext, useReducer } from "react";

const ModalDataContext = createContext();

const initialState = {
  aboutPage: false,
  membersPage: false,
  postsPage: true,
  latestPage: false,
  modalContent: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "open-about":
      return {
        ...state,
        aboutPage: true,
        membersPage: false,
        postsPage: false,
        latestPage: false,
      };
    case "open-members":
      return {
        ...state,
        membersPage: true,
        aboutPage: false,
        postsPage: false,
        latestPage: false,
      };
    case "open-posts":
      return {
        ...state,
        postsPage: true,
        aboutPage: false,
        membersPage: false,
        latestPage: false,
      };
    case "open-latest":
      return {
        ...state,
        latestPage: true,
        aboutPage: false,
        membersPage: false,
        postsPage: false,
      };
    default:
      throw new Error("No matching action type");
  }
}


//eslint-disable-next-line
function DataContext({ children }) {
  const [{ aboutPage, postsPage, membersPage, modalContent, latestPage }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <ModalDataContext.Provider value={{aboutPage, postsPage, latestPage, membersPage, modalContent, dispatch}}>
      {children}
    </ModalDataContext.Provider>
  );
}

//eslint-disable-next-line
function useData() {
  const context = useContext(ModalDataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a ModalProvider");
  }
  return context;
}

export { DataContext, useData };
