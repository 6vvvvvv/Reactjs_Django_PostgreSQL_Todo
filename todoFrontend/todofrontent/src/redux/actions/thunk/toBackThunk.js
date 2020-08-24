import axios from "axios";
import {
  displaySuccess,
  displayFail,
} from "../action-creators/displayActionCreators";
import {
  addItem,
  editItem,
  deleteItem,
} from "../action-creators/todoActionCreators";

//TODO:
export const todo_add_fetch_tobackend = (task) => {
  return (dispatch, getState) => {
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
          dispatch(displaySuccess);
          dispatch(addItem(res.data.tofrontend));
        } else {
          alert(`${res.data.msg}`);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
          dispatch(displayFail);
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
        dispatch(displaySuccess);
        dispatch(deleteItem(res.data.tofrontend));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
          dispatch(displayFail);
        }
      });
  };
};

export const todo_edit_fetch_tobackend = (edititem) => {
  return (dispatch, getState) => {
    axios
      .put("http://localhost:8000/api/modifyitem/", { data: edititem })
      .then((res) => {
        console.log("editfrombackres",res);
        dispatch(editItem(res.data.tofrontend[0]))
      })
      .catch((err) => {
        console.log(err.reponse);
      });
  };
};
