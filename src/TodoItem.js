import React from "react";

function TodoItem({ item }) {
  console.log(item);
  return <div>{item.text}</div>;
}

export default TodoItem;
