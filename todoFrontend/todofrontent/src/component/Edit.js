import React, { Component } from "react";
import "./Edit.css";

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

  confirmChange = () => {
    console.log("you have confirmed");
  };

  cancelChange = () => {
    console.log("you hanve cancelled");
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
        <button  onClick={this.confirmChange}>Confirm</button>
        <button  onClick={this.cancelChange}>Cancel</button>
        </span>
      </div>
    );
  }
}

export default Edit;
