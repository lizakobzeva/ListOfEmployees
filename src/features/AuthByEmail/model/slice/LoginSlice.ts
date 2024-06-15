import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginShema } from "../types/LoginShema";
import { LoginByEmail } from "../services/LoginByEmail/LoginByEmail";

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
      .addCase(LoginByEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
      })
      .addCase(LoginByEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginByEmail.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { setEmail, setPassword } = LoginSlice.actions;

export default LoginSlice.reducer;
