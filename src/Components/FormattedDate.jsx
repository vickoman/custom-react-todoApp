import React from "react";

export function FormattedDate(props) {
  return <div>It is {props.date.toLocaleTimeString()}</div>;
}
