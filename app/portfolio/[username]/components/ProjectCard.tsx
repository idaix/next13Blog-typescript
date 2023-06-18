"use client";

import { SafeRepoType } from "@/app/types";
import Link from "next/link";

const ProjectCard = ({ project }: { project: SafeRepoType }) => {
  return (
    <article className="bg-slate-50 dark:bg-slate-950 p-5 rounded-xl flex flex-col gap-y-1 justify-between">
      <div className="">
        <div className="flex gap-1">
          <h3 className="flex-1 font-semibold">{project.name}</h3>
          <Link
            target="_blank"
            href={project.html_url}
            className="text-xs text-gray-500"
          >
            code
          </Link>
          {project.homepage && (
            <Link
              target="_blank"
              href={"https://" + project.homepage}
              className="text-xs  text-gray-500"
            >
              live
            </Link>
          )}
        </div>
        <p className="text-gray-500 line-clamp-2">{project.description}</p>
      </div>
      <div className="w-full flex gap-2 justify-end">
        <span className="text-xs text-gray-500">{project.language}</span>
        <span className="text-xs text-gray-500">
          {project.stargazers_count} stars
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;
