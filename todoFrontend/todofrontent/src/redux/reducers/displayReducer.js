import {
  DISPLAYDBSUCCESS,
  DISPLAYFAIL,
} from "../actions/action-types/todo-actions";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAYDBSUCCESS:
      return console.log("Loading Success");

    case DISPLAYFAIL:
      return console.log("Loading Error");
    default:
      return state;
  }
};
