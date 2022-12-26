import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";

export const rootRuducers = combineReducers({
  user: userReducer,
});
