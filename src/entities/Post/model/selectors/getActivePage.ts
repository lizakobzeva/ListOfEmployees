import { StateShema } from "app/providers/StoreProvider/config/StateShema";

export const getActivePage = (state: StateShema) => state.posts?.activePage;
