"use client";
import { motion, useInView } from "framer-motion";
import { SafePostType } from "../types";
import { useRef } from "react";

interface ArticleProps {
  data: SafePostType;
}
const Article: React.FC<ArticleProps> = ({ data }) => {
  const articleRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(articleRef);
  return (
    <motion.article
      key={data.id}
      ref={articleRef}
      style={{
        // transform: isInView ? "none" : "translateX(-100px)",
        opacity: isInView ? 1 : 0,
        transition: "all 3s",
      }}
      className="relative"
    >
      <span className="absolute hidden lg:block text-gray-500 top-5 left-40">
        April 24, 2023
      </span>
      <div className="p-5 lg:ml-80 rounded-xl hover:bg-blue-50/30 dark:hover:bg-slate-800/50 duration-300 cursor-pointer">
        <span className="lg:hidden text-gray-500 text-xs">April 24, 2023</span>
        <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-gray-50 first-letter:capitalize">
          {data.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 pb-3">{data.body}</p>
        <div className="flex items-center gap-1 text-sky-500">
          <span>Read more</span>
          <svg
            className="relative mt-px overflow-visible ml-2.5 text-sky-300"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        </div>
      </div>
    </motion.article>
  );
};

export default Article;
