import { combineReducers } from "redux";
import personsReducer from "./personsReducer";

const rootReducer = combineReducers({ personsReducer });

export default rootReducer;
