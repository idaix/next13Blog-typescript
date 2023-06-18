export type SafePostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type SafeRepoType = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  homepage: string;
  language: string;
  stargazers_count: number;
};
