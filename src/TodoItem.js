import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./states/todoList";

export default function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const editItemText = ({ target: { value } }) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === item.id ? { ...todo, text: value } : todo
      )
    );
  };

  const toggleItemCompletion = () => {
    setTodoList(
      todoList.map(todo =>
        todo.id === item.id ? { ...todo, isComplete: !item.isComplete } : todo
      )
    );
  };

  const deleteItem = () => {
    setTodoList(todoList.filter(todo => todo.id !== item.id));
  };

  return (
    <li key={`todo-item-${item.id}`}>
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />

      <input type="text" value={item.text} onChange={editItemText} />

      <button onClick={deleteItem}>X</button>
    </li>
  );
}
