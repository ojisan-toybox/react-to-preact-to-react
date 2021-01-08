import ReactPlayer from "react-player";

export const Component = (props) => {
  return (
    <div>
      hello
      <ReactPlayer
        url={props.url}
        controls
        muted={true}
        playing={true}
      ></ReactPlayer>
    </div>
  );
};
