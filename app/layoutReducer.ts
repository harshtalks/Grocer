import { createSlice } from "@reduxjs/toolkit";

type initialState = {
  sidebarOpen: boolean;
};

const initialState: initialState = {
  sidebarOpen: false,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState: initialState,
  reducers: {
    openSideBar(state) {
      state.sidebarOpen = true;
    },
    closeSideBar(state) {
      state.sidebarOpen = false;
    },
    toggleSideBar(state) {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { openSideBar, closeSideBar, toggleSideBar } = layoutSlice.actions;

export default layoutSlice.reducer;
