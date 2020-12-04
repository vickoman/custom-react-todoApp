import React from "react";
import Circle from "react-circle";

export class Chart extends React.Component {
  constructor(props) {
    super(props);
    return;
  }

  render() {
    if (this.props.completed.length > 0) {
      const percent =
        (this.props.completed.length / this.props.totalTasks) * 100;
      // return <div>{percent.toFixed(0)}%</div>;
      return (
        <div>
          <Circle progress={percent.toFixed(0)} />
        </div>
      );
    } else {
      return <div>0%</div>;
    }
  }
}
