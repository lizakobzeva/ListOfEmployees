import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginShema } from "../types/LoginShema";
import { AddLikedPost } from "../services/AddLikedPost/AddLikedPost";

const initialState: LoginShema = {
  email: "",
  password: "",
  isLoading: false,
  error: false,
};
export const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setEmail: (state, actions: PayloadAction<string>) => {
      state.email = actions.payload;
    },
    setPassword: (state, actions: PayloadAction<string>) => {
      state.password = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddLikedPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
      })
      .addCase(AddLikedPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(AddLikedPost.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { setEmail, setPassword } = LoginSlice.actions;

export default LoginSlice.reducer;
