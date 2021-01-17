import * as React from "react";
import { TodoItemInterface } from "./../interfaces";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoItem = (props: TodoItemInterface) => {
  const txtWarning = "Deadline is coming.";
  const txtMissDeadline = "Missing deadline.";
  return (
    <div className="wrapper-item">
      <div className="todo-item">
        <div onClick={() => props.handleTodoComplete(props.todo.id)}>
          {props.todo.isCompleted ? (
            <span className="todo-item-checked">&#x2714;</span>
          ) : (
            <span className="todo-item-unchecked" />
          )}
        </div>

        <div className="todo-item-input-wrapper">
          <input
            value={props.todo.title}
            onBlur={props.handleTodoBlur}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              props.handleTodoUpdate(event, props.todo.id)
            }
          />
          <DatePicker
            showTimeSelect
            selected={props.todo.dueDate}
            onChange={(date: Date | null) =>
              props.handleTodoUpdateDueDate(date, props.todo.id)
            }
            dateFormat="Pp"
          />

          <div
            className="item-remove"
            onClick={() => props.handleTodoRemove(props.todo.id)}
          >
            Delete
          </div>
        </div>
      </div>

      <div className="alert-deadline">
        {props.warning ? (
          <span className="warning-icon">&#9888; {txtWarning}</span>
        ) : (
          <span className="error-icon">&#9888; {txtMissDeadline}</span>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
