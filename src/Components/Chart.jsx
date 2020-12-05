import React from "react";
import Circle from "react-circle";

export class Chart extends React.Component {
  constructor(props) {
    super(props);
    return;
  }

  render() {
    let progressValue = 0;
    if (this.props.completed.length > 0) {
      const percent =
        (this.props.completed.length / this.props.totalTasks) * 100;
      progressValue = percent.toFixed(0);
    }
    return (
      <div className="mt-1 w-80 border-gray-200 border rounded p-2">
        <Circle progress={progressValue} />
      </div>
    );
  }
}
