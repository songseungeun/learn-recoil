import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "./states/todoList";

export default function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const generateId = () => {
    return todoList.length ? Math.max(...todoList.map(todo => todo.id)) + 1 : 1;
  };

  const addTodoItem = () => {
    setTodoList(prev => [
      ...prev,
      { id: generateId(), text: inputValue, isComplete: false }
    ]);

    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />

      <button onClick={addTodoItem}>Add</button>
    </div>
  );
}
