import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoginByEmail } from "../services/LoginByEmail/LoginByEmail";
import { RegisterShema } from "../types/RegisterShema";
import { RegisterByEmail } from "../services/RegisterByEmail/RegisterByEmail";

const initialState: RegisterShema = {
  name: "",
  email: "",
  password: "",
  isLoading: false,
  error: false,
};
export const RegisterSlice = createSlice({
  name: "register",
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
      .addCase(RegisterByEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
      })
      .addCase(RegisterByEmail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(RegisterByEmail.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { setEmail, setPassword } = RegisterSlice.actions;

export default RegisterSlice.reducer;
