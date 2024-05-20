import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <div>working</div>
      <TodoItem todos={workingTodos} setTodos={setTodos} />
      <div>done</div>
      <TodoItem todos={doneTodos} setTodos={setTodos} />
    </div>
  );
}
