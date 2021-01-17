import * as React from "react";
import shortid from "shortid";
import { TodoInterface, TodoFormInterface } from "./../interfaces";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoForm = (props: TodoFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [title, setTitle] = React.useState("");
  const [dueDate, setDueDate] = React.useState<Date | null>(new Date());

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  const handleChange = (date: Date | null) => {
    setDueDate(date);
  };

  function handleAddNew() {
    if (title === "") return;
    const newTodo: TodoInterface = {
      id: shortid.generate(),
      title,
      isCompleted: false,
      dueDate: dueDate,
    };

    props.handleTodoCreate(newTodo);

    if (inputRef && inputRef.current) {
      inputRef.current.value = "";
      setTitle("");
      setDueDate(new Date());
    }
  }

  return (
    <div className="todo-form">
      <input
        className="title-input"
        ref={inputRef}
        type="text"
        placeholder="Title to do"
        onChange={(event) => handleInputChange(event)}
      />
      <DatePicker
        showTimeSelect
        selected={dueDate}
        onChange={handleChange}
        dateFormat="Pp"
      />
      <button onClick={() => handleAddNew()}>Add New</button>
    </div>
  );
};

export default TodoForm;
