import * as React from "react";
import Box from "@mui/material/Box";
import ShoppingList from "./rightSidebarComps/ShoppingList";
import SaveList from "./rightSidebarComps/SaveList";
import AddNewItem from "./rightSidebarComps/AddNewItem";

export default function RightSideBar(): JSX.Element {
  const [addNewItem, toggleAddNewItem] = React.useState(false);
  return (
    <>
      <Box
        sx={{
          width: "390px",
          height: "100vh",
          background: "white",
          position: "absolute",
          right: "0",
          top: "0",
        }}
      >
        {addNewItem ? (
          <AddNewItem toggleAddNewItem={toggleAddNewItem} />
        ) : (
          <>
            <ShoppingList toggleAddNewItem={toggleAddNewItem} />
            <SaveList />
          </>
        )}
      </Box>
    </>
  );
}
