import { SAVETODB, DELETEFROMDB } from "../action-types/todo-actions";

export const savetodb = (payload) => ({
  type: SAVETODB,
  payload,
});

export const deletefromdb = (payload) => ({
  type: DELETEFROMDB,
  payload,
});
