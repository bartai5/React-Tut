import React, { Component } from "react";

class NewComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "This is a state example!",
      btnName: "Click Me",
      btnName1: "Reset"
    };
  }
  styles = {
    fontStyle: "bold",
    color: "stealblue",
    textAlign: "center",
  };
  btnStyle = {
    fontSize: "20px",
    padding: "10px 20px",
    marginLeft: "30px",
    marginRight: "auto"
  }
  buttonClicked = () => {
    this.setState({
      message: "The Button is clicked!!",
      btnName: "I've Been Clicked!!"
    })
  }
  resetBtn = () => {
    this.setState({
      message: "This is a state example!",
      btnName: "Click Me",
      btnName1: "Reset",
    });
  }
  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>{this.state.message}</h3>
        <button style={this.btnStyle} onClick={this.buttonClicked}>{this.state.btnName}</button>
        <button style={this.btnStyle} onClick={this.resetBtn}>{this.state.btnName1}</button>
      </div>
    );
  }
}

export default NewComp;
