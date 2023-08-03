import React from "react";

export const VerticalSeperator = (style: {
  style?: React.CSSProperties | undefined;
}) => (
  <div
    style={{
      height: "6.5rem",
      width: "0.1rem",
      backgroundColor: "#BBBBC7",
      marginRight: "2rem",
      marginLeft: "2rem",
      ...style,
    }}
  />
);

export const ColorDot = ({
  style,
  color,
}: {
  style?: React.CSSProperties | undefined;
  color: string;
}) => (
  <div
    style={{
      height: "1rem",
      width: "1rem",
      borderRadius: "0.5rem",
      backgroundColor: color ? color : "#F5CB77",
      ...style,
    }}
  />
);
