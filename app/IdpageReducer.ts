import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category, ShoppingItem, ShoppingList } from "@prisma/client";
import Fetcher from "../lib/fetcher";

type intialState = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  list: ShoppingList & { items: Array<ShoppingItem & { category: Category }> };
};

const initialState = {} as intialState;

const idPageDataSlice = createSlice({
  initialState: initialState,
  name: "idPageData",
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadIdPageData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loadIdPageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched items to the array
        if (action.payload.error) {
          state.error = action.payload.error;
        }
        state.list = action.payload;
      })
      .addCase(loadIdPageData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const loadIdPageData = createAsyncThunk(
  "idPageData/loadIdPageData",
  async ({ id }: { id: number }) => {
    const res = await Fetcher("/getListbyId", { id: id });
    return res;
  }
);

export default idPageDataSlice.reducer;
