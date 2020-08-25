import {
  ADD,
  EDIT,
  DELETE,
  UPDATE,
  SHOW,
} from "../actions/action-types/todo-actions";

const initialState = { items: [], count: 0, editlist: [], showlist: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    // case SHOW:
    //   return {
    //     ...state,
    //     count: action.payload.length,
    //     showlist: [...state.showlist, action.payload],
    //   };

    case ADD:
      return {
        ...state,
        items: [...state.items, action.payload],
        count: state.count + 1,
      };
    case EDIT:
      state.editlist.splice(0, 1, action.payload);
      return { ...state };

    case DELETE:
      var afterdelete = state.items.filter(
        (task) => task.id !== action.payload.id
      );
      return { ...state, items: afterdelete, count: state.count - 1 };

    case UPDATE:
      const items = state.items.map((item) => {
        if (item.id === action.payload[0].id) {
          item.data = action.payload[0].title;
        }
        return item;
      });
      return { ...state, items: items };

    default:
      return state;
  }
};

export const getItems = (state) => state.todoReducer.items;
export const getCount = (state) => state.todoReducer.count;
export const getShowlist = (state) => state.todoReducer.showlist[0];
export const getEditlist = (state) => state.todoReducer.editlist[0];
