import { StateShema } from "app/providers/StoreProvider/config/StateShema";

export const getAuthData = (state: StateShema) => state.user?.user;
