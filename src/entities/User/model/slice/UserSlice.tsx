import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserShema } from "../types/user";
import {
  TOKEN_LOCALSTORAGE_KEY,
  USER_LOCALSTORAGE_KEY,
} from "shared/const/localStorage";

const initialState: UserShema = {};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      console.log(action.payload);
      state.user = action.payload;
      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(action.payload)
      );
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
      if (user && token) {
        state.user = JSON.parse(user);
        state.accessToken = JSON.parse(token);
      }
    },
    logout: (state) => {
      state.user = undefined;
      state.accessToken = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
      localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
    },
  },
});

export const { setAuthData, initAuthData, logout } = userSlice.actions;

export default userSlice.reducer;
