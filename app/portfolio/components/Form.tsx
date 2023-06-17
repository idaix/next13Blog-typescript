"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

const Form = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const username = inputRef.current?.value || "";

    if (!username) {
      console.log("empty!!!!");
    } else {
      router.push(`/portfolio/${username}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto px-3 md:p-0">
      <input
        ref={inputRef}
        type="text"
        placeholder="github username..."
        className="p-3 w-full rounded-lg border-2 focus:bg-blue-50 dark:focus:bg-slate-800/50 border-blue-200 dark:border-slate-700 dark:focus:border-slate-800 bg-transparent outline-none focus:border-blue-400 transition"
      />
    </form>
  );
};

export default Form;
