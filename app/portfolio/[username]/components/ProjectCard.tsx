"use client";
import { getREADMEContent } from "@/app/actions/getREADMEContent";
import { SafeRepoType } from "@/app/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { HiOutlineExternalLink, HiOutlineStar } from "react-icons/hi";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";

const ProjectCard = ({
  project,
  username,
}: {
  project: SafeRepoType;
  username: string;
}) => {
  const [readmeContent, setreadmeContent] = useState("");
  useEffect(() => {
    const getReadme = async () => {
      const data = await getREADMEContent(username, project.name);
      setreadmeContent(data as string);
    };
    getReadme();
  }, [username, project.name]);

  return (
    <article className="bg-slate-50 dark:bg-slate-950 p-5 rounded-xl flex flex-col gap-y-1 justify-between">
      <div className="">
        <div className="flex gap-1">
          <h3 className="flex-1 font-semibold">{project.name}</h3>
          <Link
            target="_blank"
            href={project.html_url}
            className="text-sm text-gray-500"
          >
            <HiOutlineCodeBracketSquare />
          </Link>
          {project.homepage && (
            <Link
              target="_blank"
              href={"https://" + project.homepage}
              className="text-sm  text-gray-500"
            >
              <HiOutlineExternalLink />
            </Link>
          )}
        </div>
        <p className="text-gray-500 line-clamp-2">{project.description}</p>
      </div>
      <div className="w-full flex gap-2 justify-end">
        <span className="text-xs text-gray-500">{project.language}</span>
        <span className="text-xs text-gray-500 flex items-center">
          <HiOutlineStar />
          {project.stargazers_count}
        </span>
      </div>
    </article>
  );
};

export default ProjectCard;
