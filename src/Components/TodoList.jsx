import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import BoxWithBorderCustom from "./shared/BoxithBorder";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    return;
  }

  render() {
    if (this.props.items.length === 0) {
      return <div className="mt-1 mb-1 text-base w-80 italic border-gray-200 border rounded p-2">No hay elementos</div>;
    }
    return (
      <BoxWithBorderCustom color='gray'>
        <ul>
          {this.props.items.map((item) => (
            <li
              className={item.status  ? "completed line-through text-gray-50" : "incompleted text-black" }
              key={item.id}
            >
              <label className="inline-flex items-center mt-3">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500 border-blue-500 border rounded" onClick={(e) => this.props.handleToggleCompletar(e, item.id)} /><span className="ml-2 text-gray-700">{item.title}</span>
                <FontAwesomeIcon className="ml-2 text-red-900 cursor-pointer" icon={faTrash} onClick={(e) => this.props.handleDelete(e, item.id)} />
              </label>
            </li>
          ))}
        </ul>
      </BoxWithBorderCustom>
    );
  }
}
