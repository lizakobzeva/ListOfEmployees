import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setActivePage } from "entities/Post/model/slice/postsSlice";
import { baseUrl } from "shared/const/axios";

export const GetPosts = createAsyncThunk(
  "posts/getposts",
  async (page?: number, thunkAPI?) => {
    try {
      let request = "posts";
      if (page != 0) {
        request = `posts?_page=${page}&_limit=6`;
      }

      const response = await axios.get(`${baseUrl}/${request}`);
      thunkAPI.dispatch(setActivePage(page));
      return response.data;
    } catch (e) {
      return "error";
    }
  }
);
