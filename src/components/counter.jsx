import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  style = {
    fontSize: 30,
    fontWeight: "bold",
  };

  render() {
    let classes = this.getButtonClasses();
    return (
      <div>
        <span style={this.style} className="m-3">
          {this.formatCount()}
        </span>
        <br />
        <button className={classes}>Increment</button>
      </div>
    );
  }

  getButtonClasses() {
    let classes = "m-2 btn ";
    classes += this.state.count === 0 ? "btn-warning" : "btn-primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
