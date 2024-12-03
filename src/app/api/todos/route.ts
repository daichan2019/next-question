export async function GET(): Promise<Response> {
  const currentTime = new Date();
  const todos = [
    { id: 1, title: "Learn React", isCompleted: true, currentTime },
    { id: 2, title: "Learn Next.js", isCompleted: false, currentTime },
    { id: 3, title: "Build a Next.js app", isCompleted: false, currentTime },
  ];

  return new Response(JSON.stringify(todos), {
    status: 200,
  });
}
