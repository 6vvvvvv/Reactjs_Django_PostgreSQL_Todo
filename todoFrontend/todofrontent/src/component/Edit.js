import React, { Component } from "react";
import "./Edit.css";
import { connect } from "react-redux";
import { todo_update_fetch_tobackend } from "../redux/actions/thunk/toBackThunk";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  onchange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  updateChange = () => {
    console.log("you have updated");
    const { todo_update_fetch_tobackend } = this.props;
    const contentid = this.props.contentid;
    console.log("contentid", contentid);
    const updateitem = [this.state.text, contentid];
    todo_update_fetch_tobackend(updateitem);
  };

  cancelChange = () => {
    console.log("you hanve cancelled");
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={this.onchange}
        ></input>
        <span>
          <button onClick={this.updateChange}>Update</button>
          <button onClick={this.cancelChange}>Cancel</button>
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  todo_update_fetch_tobackend: (updateitem) =>
    dispatch(todo_update_fetch_tobackend(updateitem)),
});

export default connect(null, mapDispatchToProps)(Edit);
