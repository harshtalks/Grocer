import * as React from "react";
import Box from "@mui/material/Box";
import NewItemCard from "../smallComps/NewItemCard";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ListComponents from "./ListComponents";

type shoppingListType = {
  toggleAddNewItem: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ShoppingList({ toggleAddNewItem }: shoppingListType) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80%",
        overflow: "auto",
        background: "#FFF0DE",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "4em 0",
      }}
    >
      <NewItemCard toggleAddNewItem={toggleAddNewItem} />
      <Box
        sx={{
          marginTop: "2rem",
          width: "310px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Shopping List
          </Typography>
          <EditIcon />
        </Box>
        <ListComponents listItemsType="Foods and Vegetables" />
        <ListComponents listItemsType="Foods and Vegetables" />
        <ListComponents listItemsType="Foods and Vegetables" />
        <ListComponents listItemsType="Foods and Vegetables" />
        <ListComponents listItemsType="Foods and Vegetables" />
      </Box>
    </Box>
  );
}
