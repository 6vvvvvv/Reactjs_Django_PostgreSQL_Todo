import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import todoReducer from "./todoReducer";
import fetchReducer from "./fetchReducer";

export default combineReducers({ displayReducer, todoReducer, fetchReducer });
