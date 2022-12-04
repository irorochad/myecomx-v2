import { createContext, useState } from "react";

export const UserContext = createContext({
  /* an object should be null at first, cuz an empty object will also be rendered as true. 
  So Null, is fine */
  currentUser: null,
  setCurrentUser: () => null,
});

export const Userprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
