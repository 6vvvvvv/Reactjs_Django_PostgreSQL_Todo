import { DISPLAYDBSUCCESS, DISPLAYFAIL } from "../action-types/todo-actions";

export const displaySuccess = () => ({
  type: DISPLAYDBSUCCESS,
  payload:"Loading Success"
});

export const displayFail = () => ({
  type: DISPLAYFAIL,
  payload:"Loading Fail"
});
