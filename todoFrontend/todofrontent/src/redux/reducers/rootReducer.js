import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import todoReducer from "./todoReducer";

export default combineReducers({ displayReducer, todoReducer });