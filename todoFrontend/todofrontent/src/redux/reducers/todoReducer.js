import { ADD, EDIT, DELETE } from "../actions/action-types/todo-actions";

const initialState = { items: [], count: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        items: [...state.items, action.payload],
        count: state.count + 1,
      };
    case EDIT:
      return { ...state, ...action.payload };
    case DELETE:
      var afterdelete = state.items.filter(
        (task) => task.id !== action.payload.id
      );
      return { ...state, items: afterdelete, count: state.count - 1 };
    default:
      return state;
  }
};

export const getItems = (state) => state.todoReducer.items;
export const getCount = (state) => state.todoReducer.count;
