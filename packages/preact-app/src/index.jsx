import { Component } from "preact-component";
import { h, render } from "preact";
import { useState } from "preact/hooks";

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

render(<App></App>, document.body);
