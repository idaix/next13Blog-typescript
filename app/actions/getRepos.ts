export const getRepos = async (username: string) => {
  !username && null;
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const repos = await res.json();
  return repos;
};
