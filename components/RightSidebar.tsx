import * as React from "react";
import Box from "@mui/material/Box";
import ShoppingList from "./rightSidebarComps/ShoppingList";
import SaveList from "./rightSidebarComps/SaveList";
import AddNewItem from "./rightSidebarComps/AddNewItem";
import { useGetMediaQueryMatches } from "../hooks/useGetMediaQueryMatches";
import DisplayItem from "./rightSidebarComps/DisplayItem";
import { useAppSelector } from "../hooks/reduxHooks";
import EditListActions from "./smallComps/EditListActions";

interface sideBarType {
  openSideBar: boolean;
  toggleOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function RightSideBar({
  openSideBar,
  toggleOpenSideBar,
}: sideBarType): JSX.Element {
  const [addNewItem, toggleAddNewItem] = React.useState(false);
  const [addedItem, setAddedItem] = React.useState(false);
  const edit = useAppSelector((state) => state.lists.edit);

  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();

  return (
    <>
      <Box
        sx={{
          maxWidth: "390px",
          width: isSmall ? "calc(100% - 80px)" : "calc(100% - 100px)",
          height: "100vh",
          overflow: "auto",
          background: "white",
          position: "absolute",
          right: "0",
          top: "0",
          borderRadius: isSmall ? "20px" : "0",
        }}
      >
        {addNewItem ? (
          addedItem ? (
            <DisplayItem setAddedItem={setAddedItem} />
          ) : (
            <AddNewItem
              toggleAddNewItem={toggleAddNewItem}
              setAddedItem={setAddedItem}
            />
          )
        ) : (
          <>
            <ShoppingList toggleAddNewItem={toggleAddNewItem} />
            {edit ? <EditListActions /> : <SaveList />}
          </>
        )}
      </Box>
    </>
  );
}
