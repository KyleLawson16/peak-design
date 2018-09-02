import React, { Component } from "react";
import style from "./WhiteSpace.scss";

class WhiteSpace extends Component {
  render() {
    const { height, width, orientation, backgroundColor } = this.props;
    if ((width && !height) || orientation === "horizontal") {
      return (
        <div
          style={{
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            display: "inline-block"
          }}
        />
      );
    } else
      return (
        <div
          style={{
            width: "100%",
            height: height,
            backgroundColor: backgroundColor
          }}
        />
      );
  }
}

export { WhiteSpace };
