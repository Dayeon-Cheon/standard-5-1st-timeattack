import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const initialState = [
    {
      id: crypto.randomUUID(),
      title: "밥 먹기",
      content: "저녁밥",
      isDone: false,
    },
    {
      id: crypto.randomUUID(),
      title: "공부",
      content: "리액트",
      isDone: true,
    },
  ];

  const [todos, setTodos] = useState(initialState);

  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}
