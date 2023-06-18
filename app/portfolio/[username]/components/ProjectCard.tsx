"use client";

import { SafeRepoType } from "@/app/types";

const ProjectCard = ({ project }: { project: SafeRepoType }) => {
  return (
    <article className="bg-slate-50 dark:bg-slate-950 p-5 rounded-xl flex flex-col gap-y-1 justify-between">
      <div className="">
        <h3 className="font-semibold">{project.name}</h3>
        <p className="text-gray-500 line-clamp-2">{project.description}</p>
      </div>
      <span className="self-end text-right text-xs lg:text-sm xl:text-md text-gray-500">
        {project.language}
      </span>
    </article>
  );
};

export default ProjectCard;
