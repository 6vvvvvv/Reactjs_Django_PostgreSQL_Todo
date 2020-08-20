import axios from "axios";
import {
  displaySuccess,
  displayFail,
} from "../action-creators/displayActionCreators";
import { savetodb, deletefromdb } from "../action-creators/fetchActionCreators";
import {
  addItem,
  editItem,
  deleteItem,
} from "../action-creators/todoActionCreators";

//TODO:
export const todo_add_fetch_tobackend = (task) => {
  return (dispatch, getState) => {
    console.log("task", task);
    axios
      .post(
        "http://localhost:8000/api/additem/",
        { data: task },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.tofrontend) {
          dispatch(addItem(res.data.tofrontend));
        } else {
          alert(`${res.data.msg}`);
        }
      });
  };
};

export const todo_delete_fetch_tobackend = (deleteitem) => {
  return (dispatch, getState) => {
    axios
      .delete("http://localhost:8000/api/deleteitem/", { data: deleteitem })
      .then((res) => {
        // console.log("deleteres", res.data);
        // console.log("getStatedelete", (res.data.tofrontend));
        dispatch(deleteItem(res.data.tofrontend));
      });
  };
};
