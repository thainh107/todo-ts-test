import * as React from "react";
import TodoItem from "./todo-item";
import { TodoListInterface } from "./../interfaces";

const TodoList = (props: TodoListInterface) => {
  function checkAlert(dueDate: number | "", now: number) {
    if (dueDate) {
      if (dueDate > now) return true;
    }
    return false;
  }

  return (
    <div className="todo-list">
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              todo={todo}
              handleTodoUpdate={props.handleTodoUpdate}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoComplete={props.handleTodoComplete}
              handleTodoBlur={props.handleTodoBlur}
              handleTodoUpdateDueDate={props.handleTodoUpdateDueDate}
              warning={checkAlert(
                todo.dueDate ? todo.dueDate.getTime() : "",
                props.timer.getTime()
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
