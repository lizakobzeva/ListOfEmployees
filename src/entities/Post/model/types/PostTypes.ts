export interface Post {
  id: string;
  title: string;
  imageUrl: string;
  text: string;
  userId: string;
}

export interface PostsShema {
  posts: Array<Post>;
  post: Post;
  isLoading: boolean;
  isError: boolean;
  activePage: number;
}
