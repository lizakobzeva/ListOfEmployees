import { ThunkExtraArg } from "./config/StateShema";
import { AppDispatch, useAppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
import { CreateReduxStore } from "./ui/StoreProvider";

export { StoreProvider, CreateReduxStore, ThunkExtraArg };
export { useAppDispatch, AppDispatch };
