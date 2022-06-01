import { Category, Item } from "@prisma/client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Fetcher from "../lib/fetcher";

type intialState = {
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
  items: Array<Item & { category: Category }>;
};

const initialState = {} as intialState;

const HomePageDataSlice = createSlice({
  initialState: initialState,
  name: "homePageData",
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadPageData.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loadPageData.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched items to the array
        state.items = action.payload;
      })
      .addCase(loadPageData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const loadPageData = createAsyncThunk(
  "homePageData/loadPageData",
  async () => {
    const res = await Fetcher("/getItems");
    return res;
  }
);

export default HomePageDataSlice.reducer;
