import { Category, Item, ShoppingList } from "@prisma/client";
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

type ShoppingListType = {
  name: string;
  ownerId?: number;
  edit: boolean;
  items: Array<Item & { quantity: number } & { category: Category }>;
};

export const initialState: ShoppingListType = {
  name: "",
  items: [],
  edit: false,
};

const listSlice = createSlice({
  name: "lists",
  initialState: initialState,
  reducers: {
    itemAdded(state, action) {
      if (state.items.find((item) => item.id === action.payload.id)) {
        return state;
      }
      state.items.push(action.payload);
      return state;
    },
    //
    increaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.items.map((item) => {
          if (item.id === action.payload) {
            item.quantity++;
            return item;
          } else return item;
        });
      }
      return state;
    },
    decreaseQuantity(state, action) {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        state.items.map((item) => {
          if (item.id === action.payload) {
            if (item.quantity > 0) {
              item.quantity -= 1;
            }
            return item;
          } else return item;
        });
      }
      return state;
    },
    deleteItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      return state;
    },
    setName(state, action) {
      state.name = action.payload;
      return state;
    },
    clearEverything(state) {
      state.items = [];
      state.name = "";
      return state;
    },
    editList(state) {
      state.edit = !state.edit;
      return state;
    },
  },
});

export const {
  itemAdded,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  setName,
  clearEverything,
  editList,
} = listSlice.actions;

export default listSlice.reducer;
