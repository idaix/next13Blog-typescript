export const getUser = async (username: string) => {
  if (!username) {
    return null;
  }

  const res = fetch(`https://api.github.com/users/${username}`);
  const user = (await res).json();
  return user;
};
