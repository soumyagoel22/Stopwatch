import React from "react";

const BtnDisplay = (props) => {
  return (
    <>
      {props.status === 0 ? <button onClick={props.start}>Start</button> : ""}
    </>
  );
};

export default BtnDisplay;
