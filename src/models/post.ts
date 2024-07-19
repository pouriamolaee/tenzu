export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostDisplayType = PostType & {
  date: string;
};
