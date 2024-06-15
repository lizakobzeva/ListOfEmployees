import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "shared/const/axios";

export const GetPost = createAsyncThunk(
  "posts/getpost",
  async (postId: string) => {
    try {
      const response = await axios.get(`${baseUrl}/posts/${postId}`);

      return response.data;
    } catch (e) {
      return "error";
    }
  }
);
