import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkExtraArg } from "app/providers/StoreProvider";
import axios from "axios";
import { setAuthData } from "entities/User/model/slice/UserSlice";
import { User } from "entities/User/model/types/user";
import { NavigateFunction } from "react-router-dom";
import { baseUrl } from "shared/const/axios";
import { TOKEN_LOCALSTORAGE_KEY } from "shared/const/localStorage";

export interface LoginByEmailTypes {
  email: string;
  password: string;
}
export const LoginByEmail = createAsyncThunk(
  "login/loginByEmail",
  async (authData: LoginByEmailTypes, thunkAPI) => {
    const extra: ThunkExtraArg = thunkAPI?.extra;
    try {
      const response = await axios.post(`${baseUrl}/login`, authData);

      localStorage.setItem(
        TOKEN_LOCALSTORAGE_KEY,
        JSON.stringify(response.data?.accessToken)
      );
      thunkAPI.dispatch(setAuthData(response.data?.user));
      extra?.navigate("/allusers");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("error");
    }
  }
);
