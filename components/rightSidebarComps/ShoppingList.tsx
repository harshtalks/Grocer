import * as React from "react";
import Box from "@mui/material/Box";
import NewItemCard from "../smallComps/NewItemCard";
import { Alert, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ListComponents from "./ListComponents";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { editList } from "../../app/listReducer";

type shoppingListType = {
  toggleAddNewItem: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ShoppingList({ toggleAddNewItem }: shoppingListType) {
  const { isSmall, isSmallest } = useGetMediaQueryMatches();
  const listData = useAppSelector((state) => state.lists.items);

  const dispatch = useAppDispatch();

  let list = listData.map((el) => el.category.name);
  list = list.filter((x, i, a) => a.indexOf(x) === i);

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
        padding: isSmall ? "2em 1em" : "4em 0",
      }}
    >
      <NewItemCard toggleAddNewItem={toggleAddNewItem} />
      <Box
        sx={{
          marginTop: "2rem",
          width: isSmall ? "100%" : "310px",
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
          <EditIcon
            onClick={() => dispatch(editList())}
            sx={{ cursor: "pointer" }}
          />
        </Box>

        {list.length > 0 ? (
          list.map((item) => {
            return <ListComponents key={item} listItemsType={item} />;
          })
        ) : (
          <Alert sx={{ marginTop: "2em" }} severity="warning">
            No items have been Selected. Please Choose
          </Alert>
        )}
      </Box>
    </Box>
  );
}
