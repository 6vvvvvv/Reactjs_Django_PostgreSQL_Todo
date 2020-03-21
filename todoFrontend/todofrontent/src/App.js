import "./App.css";
import React, { Component } from "react";
import Add from "./component/Add.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: [],
      jsitems: []
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/");
      var result = await res.json();
      this.setState({
        jsitems: result
      });
    } catch (e) {
      console.log(e);
    }
  }

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  onSubmit = e => {
        e.preventDefault();
    if (this.state.text === "") {
      alert("Please don't make it empty");
    } else {
      this.setState({
        text: "",
        items: [...this.state.items, this.state.text]
      });
    }
  };

  delete = id => {
    this.setState(prevState => ({
      items: prevState.items.filter(el => el !== id)
    }));
  };

  deletejsitems = id1 => {
    this.setState(prevState => ({
      jsitems: prevState.jsitems.filter(el1 => el1 !== id1)
    }));
  };

  render() {
    var num = {
      todoCount: this.state.items.length + this.state.jsitems.length
    };
    if (num.todoCount === 6) {
      alert("You can only have 6 tasks maximum");
    }
    

    return (
      <div className="container">
        <div className="center">
          <h1 align="center">TODOLIST</h1>
        </div>

        <form className="form-horizontal" onSubmit={this.onSubmit}>
          {/* <label htmlFor="todo">What do u want to do?</label> */}
          <br></br>
          <input
            type="text"
            class="form-control"
            placeholder="Enter a different subject"
            id="todo"
            onChange={this.onChange}
            value={this.state.text}
          ></input>
          <div>
            <button className="btn btn-primary">Submit</button>
          </div>
          <br></br>
          <div align="center">
          <p> Count : {num.todoCount} Limit : {6 - num.todoCount}</p>
          </div>
        </form>
        <hr></hr>
        <Add
          items={this.state.items}
          jsitems={this.state.jsitems}
          delete={this.delete}
          deletejsitems={this.deletejsitems}
        />
      </div>
    );
  }
}

export default App;
