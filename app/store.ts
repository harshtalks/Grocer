import { configureStore } from "@reduxjs/toolkit";
import ItemReducer from "./ItemReducer";
import ListsReducer from "./listReducer";

export const store = configureStore({
  reducer: {
    lists: ListsReducer,
    item: ItemReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
