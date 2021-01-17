import * as React from "react";
import { render } from "react-dom";

import TodoForm from "./components/todo-form";
import TodoList from "./components/todo-list";
import { TodoInterface } from "./interfaces";

import "./styles/styles.css";

const TodoListApp = () => {
  const [date, setDate] = React.useState(new Date());
  const [todos, setTodos] = React.useState<TodoInterface[]>([]);
  const timer = useNewTimer();

  function handleTodoCreate(todo: TodoInterface) {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.push(todo);

    setTodos(newTodosState);
  }

  function useNewTimer() {
    
    React.useEffect(() => {
      var timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
     });
    
    function tick() {
      setDate(new Date());
     }
    
    return date;
  }

  function handleTodoUpdate(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.find((todo: TodoInterface) => todo.id === id)!.title =
      event.target.value;

    setTodos(newTodosState);
  }

  function handleTodoUpdateDueDate(
    date: Date | null,
    id: string
  ) {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.find((todo: TodoInterface) => todo.id === id)!.dueDate = date;

    setTodos(newTodosState);
  }

  function handleTodoRemove(id: string) {
    const newTodosState: TodoInterface[] = todos.filter(
      (todo: TodoInterface) => todo.id !== id
    );

    setTodos(newTodosState);
  }

  function handleTodoComplete(id: string) {
    const newTodosState: TodoInterface[] = [...todos];

    newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted = !newTodosState.find(
      (todo: TodoInterface) => todo.id === id
    )!.isCompleted;

    setTodos(newTodosState);
  }

  function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.length === 0) {
      event.target.classList.add("todo-input-error");
    } else {
      event.target.classList.remove("todo-input-error");
    }
  }

  return (
    <div className="todo-list-app">
      <TodoForm todos={todos} handleTodoCreate={handleTodoCreate} />

      <TodoList
        todos={todos}
        handleTodoUpdate={handleTodoUpdate}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
        handleTodoBlur={handleTodoBlur}
        handleTodoUpdateDueDate={handleTodoUpdateDueDate}
        timer={timer}
      />
    </div>
  );
};

const rootElement = document.getElementById("root");
render(<TodoListApp />, rootElement);
