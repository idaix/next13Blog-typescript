import { SafeRepoType } from "../types";
const repositoryCache = new Map<string, SafeRepoType[]>();

export const getRepos = async (username: string) => {
  if (!username) {
    return [];
  }

  if (repositoryCache.has(username)) {
    return repositoryCache.get(username);
  }

  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);

    if (!res.ok) throw new Error("Failed to fetch repos");

    const repos: SafeRepoType[] = (await res.json()) || [];
    if (!repos.length) return repos;

    const pinnedRepos = repos
      .sort((repo1, repo2) => repo2.stargazers_count - repo1.stargazers_count)
      .slice(0, 6);

    repositoryCache.set(username, pinnedRepos);
    return pinnedRepos;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
