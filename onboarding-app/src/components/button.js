import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const { search } = this.props;
    return (
      <div>
        <button onClick={search}>Search</button>
      </div>
    );
  }
}
