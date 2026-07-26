import styles from "../../../styles/todo.module.css";
import TodoApp from "../../../components/TodoApp";

export default function todo() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.header}>My Tasks</h1>

        <TodoApp />
      </div>
    </main>
  );
}
