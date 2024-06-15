import { configureStore } from "@reduxjs/toolkit";
import { StateShema } from "./StateShema";
import { UserSlice } from "entities/User";
import LoginSlice from "features/AuthByEmail/model/slice/LoginSlice";
import { useDispatch } from "react-redux";
import RegisterSlice from "features/AuthByEmail/model/slice/RegisterSlice";
import postsSlice from "entities/Post/model/slice/postsSlice";
import { NavigateFunction } from "react-router-dom";

const store = configureStore<StateShema>({
  reducer: {
    register: RegisterSlice,

    user: UserSlice,
    login: LoginSlice,
    posts: postsSlice,
  },
  devTools: _isDev,
});

export function CreateReduxStore(
  initialState?: StateShema,
  navigate?: NavigateFunction
) {
  const store = configureStore<StateShema>({
    reducer: {
      user: UserSlice,
      login: LoginSlice,
      register: RegisterSlice,
      posts: postsSlice,
    },
    devTools: _isDev,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            navigate,
          },
        },
      }),
  });
  return store;
}

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
