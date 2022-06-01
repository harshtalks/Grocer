import { ShoppingList, ShoppingListItem } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

/** 
 * 
 * To understand the ShoppingList strcture
 * 
 * 
model ShoppingList {
  id      Int      @id @default(autoincrement())
  createdAt DateTime @default(now())
  name    String 
  owner   User @relation(fields: [ownerId], references: [id])
  ownerId Int
  items ShoppingListItem[]
}

*/

interface intialStateType {
  name: string;
  ownerId: number;
  items: ShoppingListItem[];
}

export const initialState: intialStateType = {
  name: "first",
  ownerId: 1,
  items: [],
};

const listSlice = createSlice({
  name: "lists",
  initialState: initialState,
  reducers: {
    itemAdded(state, action) {
      const { item, quantity } = action.payload;
      const newItem: ShoppingListItem = {
        ...item,
        quantity: quantity,
      };
      state.items.push(newItem);
    },
  },
});

export default listSlice.reducer;
