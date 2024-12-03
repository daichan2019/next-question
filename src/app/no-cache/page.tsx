import TodoList from "@/app/components/todo-list";

export default async function Page(): Promise<JSX.Element> {
  return (
    <>
      <h1>キャッシュなし</h1>
      <TodoList />
    </>
  );
}
