import "./App.css";
import FunctionalComp from "./Components/FunctionalComp";
import ClassComp from "./Components/ClassComp";
import Click from "./Components/Click";
import Counter from "./Components/Counter";

import ClassProps from "./Props/ClassProps";

function App() {
  return (
    <div className="container">
      <h1>Welcome to my first React App</h1>
      {/* <h2>The Start of Components in React</h2> */}
      {/* <p>Importing components</p>
      <FunctionalComp />
      <ClassComp />
      <Click />
      <Counter/> */}

      {/* <h2>The Start of Props in React</h2> */}
      {/* <h1>Props In React</h1>
      <h2>This is a Props Class Function</h2>
      <ClassProps name="japheth" />
      <ClassProps name="Kipkurui">
        <h3>This is a child</h3>
      </ClassProps>
      <ClassProps name="Bartai">
        <button>Click Me</button>
      </ClassProps> */}

      {/* <h2>The Start of State in React</h2> */}
      <h1>State In React</h1>
    </div>
  );
}

export default App;
