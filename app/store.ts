import { configureStore } from "@reduxjs/toolkit";
import historyPageReducer from "./historyPageReducer";
import homePageReducer from "./homePageReducer";
import ItemReducer from "./ItemReducer";
import layoutReducer from "./layoutReducer";
import ListsReducer from "./listReducer";

export const store = configureStore({
  reducer: {
    lists: ListsReducer,
    item: ItemReducer,
    homePageData: homePageReducer,
    historyPageData: historyPageReducer,
    layout: layoutReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
