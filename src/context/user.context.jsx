import { createContext, useState, useEffect } from "react";

import { onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  /* an object should be null at first, cuz an empty object will also be rendered as true. 
  So Null, is fine */
  currentUser: null,
  setCurrentUser: () => null,
});

export const Userprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubsribe = onAuthStateChangedListner((user) => {
      console.log(user);
      setCurrentUser(user);
    });
    return unsubsribe;
  }, []);

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
