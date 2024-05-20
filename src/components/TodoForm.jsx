import { useState } from "react";

export default function TodoForm({ setTodos }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);

  const addTodo = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          onChange={onChangeTitle}
          value={title}
          type="text"
          placeholder="제목"
        ></input>
        <input
          onChange={onChangeContent}
          value={content}
          type="text"
          placeholder="내용"
        ></input>
        <button type="submit">추가</button>
      </form>
    </div>
  );
}
