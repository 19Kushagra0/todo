"use client";
import TodoInputGroup from "./TodoInputGroup";
import TodoList from "./TodoList";
import { useState } from "react";

export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const addTodo = (newTodo) => {
    console.log(newTodo);

    const copyData = [...todoList];
    copyData.push(newTodo);
    setTodoList(copyData);
  };

  return (
    <>
      <TodoInputGroup addTodo={addTodo} />

      <TodoList todoList={todoList} />
    </>
  );
}
