import { StateShema } from "app/providers/StoreProvider/config/StateShema";

export const getPostsSelector = (state: StateShema) => state?.posts?.posts;
