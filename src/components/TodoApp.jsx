"use client";
import TodoInputGroup from "./TodoInputGroup";
import TodoList from "./TodoList";
import EditModal from "./EditModal";
import { useState } from "react";

export default function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingIndex, setEditingIndex] = useState("");

  const addTodo = (newTodo) => {
    console.log(newTodo);

    const copyData = [...todoList];
    copyData.push(newTodo);
    setTodoList(copyData);
  };

  const deleteTodo = (indexToDelete) => {
    const newData = todoList.filter((el, index) => {
      return index !== indexToDelete;
    });

    setTodoList(newData);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const editmodal = (newText) => {
    console.log(editingIndex);

    console.log(newText);

    const editData = todoList.map((el, index) => {
      if (index === editingIndex) {
        return newText;
      }
      return el;
    });
    setTodoList(editData);
  };

  return (
    <>
      <TodoInputGroup addTodo={addTodo} />

      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        toggleModal={toggleModal}
        setEditingIndex={setEditingIndex}
      />

      {showModal ? (
        <EditModal toggleModal={toggleModal} editmodal={editmodal} />
      ) : null}
    </>
  );
}
