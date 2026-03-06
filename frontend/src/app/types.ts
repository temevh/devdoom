export type User = {
  id: string;
  email: string;
  topics: string[];
};

export type Post = {
  id: number;
  title: string;
  source: string;
  url: string;
  tags: string[];
  createdAt: string;
};
