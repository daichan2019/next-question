type Todo = {
  id: number;
  title: string;
  isCompleted: boolean;
  currentTime: string;
};

export default async function Page(): Promise<JSX.Element> {
  const res = await fetch("http://localhost:3000/api/todos");
  const todos = await res.json();

  return (
    <>
      <h1>キャッシュなし</h1>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            {todo.title}, currentTime: {todo.currentTime}
          </li>
        ))}
      </ul>
    </>
  );
}
