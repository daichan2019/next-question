import TodoList from "@/app/components/todo-list";
import { Suspense } from "react";

export default async function Page(): Promise<JSX.Element> {
  return (
    <>
      <h1>キャッシュなし</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <TodoList />
      </Suspense>
    </>
  );
}
