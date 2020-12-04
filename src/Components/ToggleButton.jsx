import React from "react";

export class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonStatus: false
    };

    this.toggleAction = this.toggleAction.bind(this);
  }

  toggleAction() {
    this.setState((state) => ({
      buttonStatus: !state.buttonStatus
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleAction}>
          {this.state.buttonStatus === true ? "Apagalo" : "Enciendelo"}
        </button>
      </div>
    );
  }
}
