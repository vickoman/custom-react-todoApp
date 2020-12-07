import React from "react";
import { Chart } from "./Chart";
import { InputTextTask } from "./InputTextTask";
import { Lista } from "./Lista";
import { TodoList } from "./TodoList";

export class TodoApp extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      list: {
        name: "",
        tasks: [],
      },
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
      ...state,
      list: {
        ...state,
        tasks: state.list.tasks.filter((el) => el.id !== itemId)
      },
    }));
  }

  onNameChange(value) {
    this.setState({ name: value });
  }

  handleInsertTask(newItem) {
    this.setState((state) => ({
      ...state,
      list: {
        ...state.list,
        tasks: state.list.tasks.concat(newItem).sort((x, y) => x.status - y.status)
      },
      name: ""
    }));
  }

  handleToggleCompletar(e, itemId) {
    if (!itemId) {
      return;
    }
    this.setState((state) => ({
      ...state,
      list: {
        ...state.list,
        tasks: state.list.tasks
        .map((el) => (el.id === itemId ? { ...el, status: !el.status } : el))
        .sort((x, y) => x.status - y.status)
      },
    }));
  }

  render() {
    return (
      <div className="pl-2">
        <Lista />
        <InputTextTask
          tasks={this.state.list.tasks}
          onNameChange={this.onNameChange}
          handleInsertTask={this.handleInsertTask}
          name={this.state.name}
          onDeleteTask={this.handleDelete}
          placeholder={this.state.placeholders.inputTask}
        />
        <TodoList
          items={this.state.list.tasks}
          handleToggleCompletar={this.handleToggleCompletar}
          handleDelete={this.handleDelete}
          boxTitle="List of Tasks"
        />
        <Chart
          totalTasks={this.state.list.tasks.length}
          completed={this.state.list.tasks.filter((t) => t.status === true)}
          boxTitle="Stats"
        />
      </div>
    );
  }
}
