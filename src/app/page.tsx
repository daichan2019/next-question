import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <Link href="/using-cache">using-cache</Link>
        <Link href="/no-cache-not-working">no-cache-not-working</Link>
        <Link href="/no-cache">no-cache</Link>
        <Link href="/no-cache-suspense">no-cache-suspense</Link>
      </div>
    </div>
  );
}
