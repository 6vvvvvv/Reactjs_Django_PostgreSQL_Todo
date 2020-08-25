import "./App.css";
import React, { Component } from "react";
import List from "./component/List.js";
import { connect } from "react-redux";
import {
  todo_add_fetch_tobackend,
  todo_list_fetch_frombackend,
} from "./redux/actions/thunk/toBackThunk";
import { getCount } from "./redux/reducers/todoReducer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  // componentDidMount = async () => {
  //   const { todo_list_fetch_frombackend } = this.props;

  //   try {
  //     todo_list_fetch_frombackend();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { todo_add_fetch_tobackend } = this.props;
    const { text } = this.state;
    if (text === "") {
      alert("Please don't make it empty");
    } else {
      todo_add_fetch_tobackend(text);
      this.setState({
        text: "",
      });
    }
  };

  render() {
    const { getCount } = this.props;

    return (
      <div className="container">
        <div className="title-container">
          <h1>TODOLIST</h1>
        </div>

        <form className="form-horizontal" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter a different subject"
            id="todo"
            onChange={this.onChange}
            value={this.state.text}
          ></input>
          <div>
            <button className="btn btn-primary subbtn">Submit</button>
          </div>
          <br></br>
          <div className="count">
            <p> Count : {getCount}</p>
          </div>
        </form>
        <hr></hr>
        <div className="list-container">
          <List />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getCount: getCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  todo_add_fetch_tobackend: (task) => dispatch(todo_add_fetch_tobackend(task)),
  todo_list_fetch_frombackend: () => dispatch(todo_list_fetch_frombackend()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
