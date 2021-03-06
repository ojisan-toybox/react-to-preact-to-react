import { Component } from "preact-component";
import { render } from "react-dom";
import { useState } from "react";

const App = () => {
  const [state, setState] = useState(Math.random());
  const changeState = () => {
    setState(Math.random());
  };
  const getPreactMessage = (valFromPreact) => {
    alert(valFromPreact);
  };
  return (
    <Component
      url="https://vimeo.com/451107160"
      state={state}
      changeState={changeState}
      getPreactMessage={getPreactMessage}
    ></Component>
  );
};

render(<App></App>, document.getElementById("root"));
