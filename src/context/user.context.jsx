import { createContext, useReducer, useEffect } from "react";

import { onAuthStateChangedListner } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
  /* an object should be null at first, cuz an empty object will also be rendered as true. 
  So Null, is fine */
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const Userprovider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
  console.log(currentUser);

  const setCurrentUser = (user) =>
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, currentUser: user });

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
