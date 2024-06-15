import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/providers/StoreProvider";
import axios from "axios";
import { setActivePage } from "entities/Post/model/slice/postsSlice";
import { setAuthData } from "entities/User/model/slice/UserSlice";
import { User } from "entities/User/model/types/user";
import { baseUrl } from "shared/const/axios";
import { TOKEN_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export interface RegisterByEmailTypes {
  name: string;
  email: string;
  password: string;
  likedUsers: Array<string>;
}
export const RegisterByEmail = createAsyncThunk(
  "register/registerByEmail",
  async (authData: RegisterByEmailTypes, thunkAPI) => {
    const extra: ThunkExtraArg = thunkAPI?.extra;
    try {
      const response = await axios.post(`${baseUrl}/register`, authData);

      localStorage.setItem(
        TOKEN_LOCALSTORAGE_KEY,
        JSON.stringify(response.data?.accessToken)
      );
      extra?.navigate("/allusers");
      thunkAPI.dispatch(setAuthData(response.data.user));
      thunkAPI.dispatch(setActivePage(1));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
