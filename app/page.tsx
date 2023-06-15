import Article from "./components/Article";
import { SafePostType } from "./types";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: SafePostType[] = await res.json();

  return (
    <main className="max-w-[52rem] mx-auto px-4 pb-28 sm:px-6 md:px-8 xl:px-12 lg:max-w-6xl ">
      <header className="py-16 sm:text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl tracking-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-300">
          Latest Updates
        </h1>
        <p className="text-lg text-slate-700 dark:text-gray-300">
          All the latest Tailwind CSS news, straight from the team.
        </p>
      </header>
      <div className="grid gap-y-8">
        {posts.slice(0, 20).map((post: SafePostType) => (
          <Article key={post.id} data={post} />
        ))}
      </div>
    </main>
  );
}
