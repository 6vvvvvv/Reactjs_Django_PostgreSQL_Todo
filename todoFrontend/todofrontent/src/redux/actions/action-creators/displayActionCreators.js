import { DISPLAYDBSUCCESS, DISPLAYFAIL } from "../action-types/todo-actions";

export const displaySuccess = () => ({
  type: DISPLAYDBSUCCESS,
});

export const displayFail = () => ({
  type: DISPLAYFAIL,
});
