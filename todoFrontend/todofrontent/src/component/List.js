import React, { Component } from "react";
import "./List.css";
import { connect } from "react-redux";
import { getItems, getEditlist } from "../redux/reducers/todoReducer";
import Axios from "axios";
import {
  todo_delete_fetch_tobackend,
  todo_edit_fetch_tobackend,
} from "../redux/actions/thunk/toBackThunk";
import Edit from "./Edit";
import { editItem } from "../redux/actions/action-creators/todoActionCreators";

class List extends Component {
  constructor(props) {
    super(props);
  }

  delclick = (item) => {
    const { todo_delete_fetch_tobackend } = this.props;

    todo_delete_fetch_tobackend(item);
  };

  editclick = (item) => {
    const { todo_edit_fetch_tobackend } = this.props;
    todo_edit_fetch_tobackend(item);
  };

  render() {
    const { getItems, getEditlist } = this.props;
 

    return (
      <div>
        <ul>
          {getItems &&
            getItems.map((item) => {
              return (
                <div>
                  <li key={item.id}>
                    {item.data}{" "}
                    <button onClick={this.delclick.bind(this, item)}>
                      Del
                    </button>
                    <button onClick={this.editclick.bind(this, item)}>
                      Edit
                    </button>
                  </li>
                  { getEditlist.isedited ? (
                    <Edit />
                  ) : null}
                </div>
              );
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getItems: getItems(state),
  getEditlist: getEditlist(state),
});

const mapDispatchToProps = (dispatch) => ({
  todo_delete_fetch_tobackend: (deleteitem) =>
    dispatch(todo_delete_fetch_tobackend(deleteitem)),
  todo_edit_fetch_tobackend: (edititem) => {
    dispatch(todo_edit_fetch_tobackend(edititem));
  },
  editItem: (payload) => {
    dispatch(editItem(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(List);

