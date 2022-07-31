import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
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
    if (this.state.count === 0) return (base += "btn-warning");
    if (this.state.count % 2 === 1) return (base += "btn-success");
    return (base += "btn-primary");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment} className={this.buttonClass()}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;
