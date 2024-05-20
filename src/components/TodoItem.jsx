export default function TodoItem({ todos, setTodos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.title}</div>
            <div>{todo.content}</div>
            <button>변경</button>
            <button>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
