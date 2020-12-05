import React from "react";
import { Chart } from "./Chart";
import { InputTextTask } from "./InputTextTask";
import { TodoList } from "./TodoList";

export class TodoApp extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      name: "",
      placeholders: {
        inputTask: "Titulo para la tarea"
      }
    };
    this.handleInsertTask = this.handleInsertTask.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.handleToggleCompletar = this.handleToggleCompletar.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e, itemId) {
    if (!itemId) {
      return;
    }

    this.setState((state) => ({
      tasks: state.tasks.filter((el) => el.id !== itemId)
    }));
  }

  onNameChange(value) {
    this.setState({ name: value });
  }

  handleInsertTask(newItem) {
    this.setState((state) => ({
      tasks: state.tasks.concat(newItem).sort((x, y) => x.status - y.status),
      name: ""
    }));
  }

  handleToggleCompletar(e, itemId) {
    if (!itemId) {
      return;
    }
    this.setState((state) => ({
      tasks: state.tasks
        .map((el) => (el.id === itemId ? { ...el, status: !el.status } : el))
        .sort((x, y) => x.status - y.status)
    }));
  }

  render() {
    return (
      <div className="pl-2">
        <InputTextTask
          tasks={this.state.tasks}
          onNameChange={this.onNameChange}
          handleInsertTask={this.handleInsertTask}
          name={this.state.name}
          onDeleteTask={this.handleDelete}
          placeholder={this.state.placeholders.inputTask}
        />        
        <h3 className="text-base font-semibold">Listado</h3>
        <TodoList
          items={this.state.tasks}
          handleToggleCompletar={this.handleToggleCompletar}
          handleDelete={this.handleDelete}
        />
        <h2 className="text-base font-semibold">Stats</h2>
        <Chart
          totalTasks={this.state.tasks.length}
          completed={this.state.tasks.filter((t) => t.status === true)}
        />
      </div>
    );
  }
}
