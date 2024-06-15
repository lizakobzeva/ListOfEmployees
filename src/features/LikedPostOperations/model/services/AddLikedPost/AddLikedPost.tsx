import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthData } from "entities/User/model/slice/UserSlice";
import { User, UserShema } from "entities/User/model/types/user";

import { baseUrl } from "shared/const/axios";

export interface AddItemInCartTypes {
  id: string;
  likedUsers: Array<string>;
}
export const AddLikedPost = createAsyncThunk(
  "register/AddLikedPost",
  async (authData: AddItemInCartTypes, thunkAPI) => {
    try {
      const response = await axios.patch<User>(
        `${baseUrl}/users/${authData.id}`,
        authData
      );

      thunkAPI.dispatch(setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
