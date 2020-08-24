import {
  DISPLAYDBSUCCESS,
  DISPLAYFAIL,
} from "../actions/action-types/todo-actions";

const initialState = { status: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPLAYDBSUCCESS:
      return { status: action.payload };

    case DISPLAYFAIL:
      return { status: action.payload };
    default:
      return state;
  }
};
