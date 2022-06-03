import { Category, ShoppingItem, ShoppingList } from "@prisma/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Fetcher from "../lib/fetcher";

type intialState = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  lists: Array<
    ShoppingList & { items: Array<ShoppingItem & { category: Category }> }
  >;
};

const initialState = {} as intialState;

const historyPageDataSlice = createSlice({
  initialState: initialState,
  name: "historyPageData",
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadHistoryData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loadHistoryData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched items to the array
        if (action.payload.error) {
          state.error = action.payload.error;
        }
        state.lists = action.payload;
      })
      .addCase(loadHistoryData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const loadHistoryData = createAsyncThunk(
  "historyPageData/loadHistoryData",
  async () => {
    const res = await Fetcher("/getLists");
    return res;
  }
);

export default historyPageDataSlice.reducer;
