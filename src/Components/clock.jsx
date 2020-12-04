import React from "react";
import { FormattedDate } from "./FormattedDate";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timeId = setInterval(
      () => {
        this.tick();
      },
      this.props.interval ? this.props.interval * 1000 : 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timeId);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title ? this.props.title : "Hello world"}</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}
