
import { ADD, EDIT, DELETE } from "../action-types/todo-actions";

export const addItem = (payload) => ({
  type: ADD,
  payload,
});

export const editItem = (payload) => ({
  type: EDIT,
  payload,
});

export const deleteItem = (payload) => ({
  type: DELETE,
  payload,
});
