import { SafeRepoType } from "../types";

export const getRepos = async (username: string) => {
  !username && null;
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos: SafeRepoType[] = (await res.json()) || [];
  if (!repos.length) return repos;
  const pinnedRepos = repos
    .sort((repo1, repo2) => repo2.stargazers_count - repo1.stargazers_count)
    .slice(0, 6);
  return pinnedRepos;
};
