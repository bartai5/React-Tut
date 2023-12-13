import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    return (
      <>
            <p>Hello {this.props.name}, You are learning about Props.</p>
            <p>{ this.props.children}</p>
      </>
    );
  }
}

export default ClassProps;
