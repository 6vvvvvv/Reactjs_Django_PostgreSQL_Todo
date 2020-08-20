import React, { Component } from "react";
import "./List.css";
import { connect } from "react-redux";
import { getItems } from "../redux/reducers/todoReducer";
import Axios from "axios";
import { todo_delete_fetch_tobackend } from "../redux/actions/thunk/toBackThunk";

class List extends Component {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  oneclick = (item) => {
    const { todo_delete_fetch_tobackend } = this.props;

    todo_delete_fetch_tobackend(item);
  };

  render() {
    const { getItems } = this.props;

    return (
      <div>
        <ul>
          {getItems &&
            getItems.map((item) => {
              return (
                <li key={item.id} onClick={this.oneclick.bind(this, item)}>
                  {item.data}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getItems: getItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  todo_delete_fetch_tobackend: (deleteitem) =>
    dispatch(todo_delete_fetch_tobackend(deleteitem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
