import { SafeRepoType } from "@/app/types";
import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

const Projects = ({
  data,
  username,
}: {
  data: SafeRepoType[] | undefined;
  username: string;
}) => {
  if (!data?.length)
    return (
      <div className="text-center">
        <span className="text-4xl text-gray-500">
          Bruh, Really!! <br /> You need to create some reppos.
        </span>
      </div>
    );
  return (
    <section className="w-full sm:px-5 lg:px-20 space-y-5">
      <SectionHeader id="02" label="My Projects" />
      <div className="grid md:grid-cols-2 gap-5">
        {data?.map((item) => (
          <ProjectCard key={item.id} project={item} username={username} />
        ))}
      </div>
      <div className="text-center">
        <Link
          target="_blank"
          className="text-center text-gray-500"
          href={`https://github.com/${username}?tab=repositories`}
        >
          View all my projects on github
        </Link>
      </div>
    </section>
  );
};

export default Projects;
