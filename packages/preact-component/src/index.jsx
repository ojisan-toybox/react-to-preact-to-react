import ReactPlayer from "react-player";
import { h } from "preact";
import { useState } from "preact/hooks";

export const Component = (props) => {
  const [preactValue] = useState("value from preact");
  return (
    <div>
      {props.state}
      <button onClick={props.changeState}>state change</button>
      <button onClick={() => props.getPreactMessage(preactValue)}>
        get preact value
      </button>
      <ReactPlayer
        url={props.url}
        controls
        muted={true}
        playing={true}
      ></ReactPlayer>
    </div>
  );
};
