import React from 'react';
import "../App.css"
import NewComp from '../Components/NewComp';

class App extends React.Component {
    styles = {
        fontStyle: "bold",
        color: "teal",
        textAlign: 'center'
    }
  render() {
    return (
      <div className='App'>
            <h1 style={this.styles}>Hope It works</h1>
            <NewComp/>
      </div>
    )
  }
}
export default App;
