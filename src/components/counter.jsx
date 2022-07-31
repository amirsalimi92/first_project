import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };

  renderTag() {
    if (this.state.tags.length === 0) return <p>There is no tag!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  buttonClass() {
    let base = "m-3 btn ";
    if (this.state.value === 0) return (base += "btn-warning");
    if (this.state.value % 2 === 1) return (base += "btn-success");
    return (base += "btn-primary");
  }

  increment = () => {
    this.setState({ value: this.state.value + 1 });
    console.log(this.state.value);
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        {this.props.children}
        <p>{this.state.value}</p>
        <button onClick={this.increment} className={this.buttonClass()}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
