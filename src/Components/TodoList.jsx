import React from "react";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    return;
  }

  render() {
    if (this.props.items.length === 0) {
      return <div>No hay elementos</div>;
    }
    return (
      <div>
        <ul>
          {this.props.items.map((item) => (
            <li
              className={item.status === false ? "incompleted" : "completed"}
              key={item.id}
            >
              {item.title}&nbsp;
              <button
                onClick={(e) => this.props.handleToggleCompletar(e, item.id)}
              >
                {item.status === false ? "completar" : "mark as incompleted"}
              </button>
              <button onClick={(e) => this.props.handleDelete(e, item.id)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
