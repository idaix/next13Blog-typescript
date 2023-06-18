import { getUser } from "@/app/actions/getUser";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { getRepos } from "@/app/actions/getRepos";
import Projects from "./components/Projects";

interface IParams {
  username: string;
}

const UserPortfolio = async ({ params: { username } }: { params: IParams }) => {
  if (!username) return;

  const user = await getUser(username);
  if (!user?.id)
    return (
      <div className="py-20 dark:text-white container mx-auto px-5">
        <p>
          Sorry there is not enough information for the user &quot;{username}
          &quot;
        </p>
      </div>
    );
  const repos = await getRepos(user?.login);

  return (
    <div className="dark:text-white container mx-auto px-5 space-y-5">
      <div className="py-5 space-y-20">
        <Navbar name={user.name} username={user.login} />
        <Header
          name={user.name}
          bio={user.bio}
          profileImage={user.avatar_url}
        />
        <Projects data={repos} />
      </div>
    </div>
  );
};

export default UserPortfolio;
