import { Category, Item } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

/**
 * 
 * 
 * 
  model Item {
  id      Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  name    String
  description String
  imageLink String
  category Category @relation(fields: [categoryId], references: [id])
  categoryId Int
  referencedItems ShoppingListItem[]
} 
*/

const initialState = {} as Item & { category: Category } & {
  isShowing: boolean;
};

const ItemSlice = createSlice({
  name: "item",
  initialState: initialState,
  reducers: {
    showDisplayCard(state) {
      state.isShowing = !state.isShowing;
    },
    showItem(state, action) {
      return (state = action.payload);
    },
  },
});

export const { showItem, showDisplayCard } = ItemSlice.actions;

export default ItemSlice.reducer;
