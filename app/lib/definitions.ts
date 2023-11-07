export type User = {
  user_id: number;
  name: string;
  username: string;
  email: string;
  password: string;
  created_at: Date;
};

export type Post = {
  post_id: number;
  user_id: number;
  username: string;
  content: string;
  created_at: Date;
}

export type Likes = {
  post_id: number;
  user_id: number;
}

export type Comments = {
  comment_id: number;
  user_id: number;
  post_id: number;
  username: string;
  comment_replied_id: number | null;
  comment_content: string;
  created_at: Date;
}