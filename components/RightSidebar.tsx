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

const RightSideBarWrapper = ({ children }: { children: React.ReactNode }) => {
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();

  return (
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
      {children}
    </Box>
  );
};

export default function RightSideBar(): JSX.Element {
  const [addNewItem, toggleAddNewItem] = React.useState(false);
  const [addedItem, setAddedItem] = React.useState(false);
  const edit = useAppSelector((state) => state.lists.edit);
  const isShowing = useAppSelector((state) => state.item.isShowing);

  if (isShowing) {
    return (
      <RightSideBarWrapper>
        <DisplayItem setAddedItem={setAddedItem} />
      </RightSideBarWrapper>
    );
  }

  return (
    <>
      {
        <RightSideBarWrapper>
          {addNewItem ? (
            <AddNewItem
              toggleAddNewItem={toggleAddNewItem}
              setAddedItem={setAddedItem}
            />
          ) : (
            <>
              <ShoppingList toggleAddNewItem={toggleAddNewItem} />
              {edit ? <EditListActions /> : <SaveList />}
            </>
          )}
        </RightSideBarWrapper>
      }
    </>
  );
}
