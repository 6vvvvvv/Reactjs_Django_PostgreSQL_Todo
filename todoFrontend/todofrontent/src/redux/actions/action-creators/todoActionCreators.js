import { ADD, EDIT, DELETE, UPDATE, SHOW } from "../action-types/todo-actions";

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

export const updateItem = (payload) => ({
  type: UPDATE,
  payload,
});

export const showItem = (payload) => ({
  type: SHOW,
  payload,
});
