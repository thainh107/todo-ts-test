// Todo interface
export interface TodoInterface {
  id: string;
  title: string;
  isCompleted: boolean;
  dueDate: Date | null;
}

// Todo form interface
export interface TodoFormInterface {
  todos: TodoInterface[];
  handleTodoCreate: (todo: TodoInterface) => void;
}

// Todo list interface
export interface TodoListInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todos: TodoInterface[];
  handleTodoUpdateDueDate: (date: Date | null, id: string) => void;
  timer: Date;
}

// Todo item interface
export interface TodoItemInterface {
  handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  handleTodoRemove: (id: string) => void;
  handleTodoComplete: (id: string) => void;
  handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
  todo: TodoInterface;
  handleTodoUpdateDueDate: (date: Date | null, id: string) => void;
  warning: boolean;
}
