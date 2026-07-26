"use client";
import styles from "../styles/todo.module.css";

export default function TodoList({ todoList }) {
  return (
    <ul className={styles.todoList}>
      {/* Example of an active task */}

      {todoList.map((todo, index) => {
        return (
          <li key={index} className={styles.todoItem}>
            <div className={styles.todoContent}>
              <input type="checkbox" className={styles.checkbox} />
              <span className={styles.todoText}>{todo}</span>
            </div>
            <div className={styles.actions}>
              <button className={styles.editButton}>Edit</button>
              <button className={styles.deleteButton}>Delete</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
