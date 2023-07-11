import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color, height, width, delay }) => {
  return (
    <ReactLoading
      type={type}
      color={color}
      height={height}
      width={width}
      delay={delay}
    />
  );
};

export default Loading;
