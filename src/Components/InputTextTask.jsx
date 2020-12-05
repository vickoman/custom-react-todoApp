import React from "react";

export class InputTextTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.name.length === 0) {
      return;
    }
    const newItem = {
      title: this.props.name,
      status: false,
      id: Math.random().toString(36).substr(2, 9)
    };
    this.props.handleInsertTask(newItem);
  }
  handleChange(e) {
    if (e.target.value.length >= 0) {
      //this.setState({ name: e.target.value });
      this.props.onNameChange(e.target.value);
    } else {
      return;
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="border text-grey-darkest px-2 py-2 w-80"
            id="new-todo"
            onChange={this.handleChange}
            value={this.props.name}
            placeholder={this.props.placeholder}
          />
          <button className="btn border text-base ml-1 bg-black  text-yellow-200">Añadir #{this.props.tasks.length + 1}</button>
        </form>
      </div>
    );
  }
}
