import { StateShema } from "app/providers/StoreProvider/config/StateShema";

export const getPostSelector = (state: StateShema) => state.posts.post;
