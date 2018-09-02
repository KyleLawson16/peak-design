import React, { Component } from "react";
import style from "./WhiteSpace.scss";

class WhiteSpace extends Component {
  render() {
    let isVertical = true;
    const { height, width, orientation, backgroundColor } = this.props;
    if ((width && !height) || orientation === "horizontal") isVertical = false;
    if (isVertical)
      return (
        <div
          style={{
            width: "100%",
            height: height,
            backgroundColor: backgroundColor
          }}
        />
      );
    else
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
  }
}

export { WhiteSpace };
