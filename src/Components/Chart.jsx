import React from "react";
import Circle from "react-circle";
import BoxWithBorderCustom from "./shared/BoxithBorder";

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
      <div>
        <h2 className="text-base font-semibold">{this.props.boxTitle}</h2>
        <BoxWithBorderCustom color="gray">
          <Circle progress={progressValue} />

        </BoxWithBorderCustom>
      </div>
    );
  }
}
