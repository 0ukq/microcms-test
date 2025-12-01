export type BlogPosts = {
  id: string;
  title: string;
};

export type Blog = {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
  category: { name: string };
};
