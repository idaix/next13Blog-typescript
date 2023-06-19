export const getREADMEContent = async (username: string, repo: string) => {
  if (!username || !repo) return null;
  const res = await fetch(
    `https://api.github.com/repos/${username}/${repo}/contents/README.md`
  );
  const contentEncoded = await res.json();

  if (!contentEncoded.content) return null;

  const content = atob(contentEncoded.content);
  return content;
};
