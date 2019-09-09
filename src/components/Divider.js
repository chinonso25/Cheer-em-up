import React from "react";
import { black } from "ansi-colors";

const Divider = props => (
  <hr
    style={{
      color: black,
      backgroundColor: black,
      height: 5,
      width: props.width
    }}
  />
);

export default Divider;
