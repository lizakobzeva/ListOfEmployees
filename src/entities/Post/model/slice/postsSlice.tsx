import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Post, PostsShema } from "../types/PostTypes";
import { GetPosts } from "features/PostsOperations/model/services/GetPosts/GetPosts";
import { GetPost } from "features/PostsOperations/model/services/GetPost/GetPost";

let initialState: PostsShema = {
  posts: [{ id: "", title: "", imageUrl: "", text: "", userId: "" }],
  post: { id: "", title: "", imageUrl: "", text: "", userId: "" },
  isLoading: false,
  isError: false,
  activePage: 1,
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPostsData: (state, action: PayloadAction<Array<Post>>) => {
      state.posts = action.payload;
    },
    initPostsData: (state) => {},
    setActivePage: (state, action: PayloadAction<number>) => {
      state.activePage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(GetPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(GetPosts.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(GetPost.fulfilled, (state, action) => {
      state.post = action.payload;
      state.isLoading = false;
    });
    builder.addCase(GetPost.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export const { setPostsData, initPostsData, setActivePage } =
  postsSlice.actions;

export default postsSlice.reducer;
