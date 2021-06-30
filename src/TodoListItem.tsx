import React from "react";

//This is declared in 'types.d.ts', which will recognize
//the types in it as global to the project and we don't
//need to explicitly import or export them.
/* interface Todo {
  text: string;
  complete: boolean;
} */

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? "line-through" : undefined }}
      >
        <input
          type="checkbox"
          checked={todo.complete}
          onClick={() => {
            toggleTodo(todo);
          }}
        />{" "}
        {todo.text}
      </label>
    </li>
  );
};
