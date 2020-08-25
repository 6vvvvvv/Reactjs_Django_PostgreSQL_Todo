import axios from "axios";
import {
  displaySuccess,
  displayFail,
} from "../action-creators/displayActionCreators";
import {
  addItem,
  editItem,
  deleteItem,
  updateItem,
  showItem,
} from "../action-creators/todoActionCreators";

export const todo_list_fetch_frombackend = () => {
  return (dispatch, getState) => {
    axios
      .get("http://localhost:8000/api/todolist/")
      .then((res) => {
        console.log("res.data.tofrontend", res.data.tofrontend);
        dispatch(showItem(res.data.tofrontend));
      })
      .catch((err) => console.log(err));
  };
};

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
        dispatch(displaySuccess);
        dispatch(deleteItem(res.data.tofrontend));
      })
      .catch((err) => {
        if (err.response) {
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
        dispatch(editItem(res.data.tofrontend[0]));
      })
      .catch((err) => {
        console.log(err.reponse);
      });
  };
};

export const todo_update_fetch_tobackend = (updateitem) => {
  return (dispatch, getState) => {
    axios
      .put("http://localhost:8000/api/updateitem/", {
        item: updateitem,
      })
      .then((res) => {
        dispatch(updateItem(res.data.tofrontend));
      });
  };
};
