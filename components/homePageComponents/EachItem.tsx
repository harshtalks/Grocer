import { Button, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Item } from "@prisma/client";
import React from "react";
import { showDisplayCard, showItem } from "../../app/ItemReducer";
import { toggleSideBar } from "../../app/layoutReducer";
import { itemAdded } from "../../app/listReducer";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";

type itemType = {
  item: Item;
};

const EachItem = ({ item }: itemType) => {
  const dispatch = useAppDispatch();
  const { isSmall, isSmallest } = useGetMediaQueryMatches();

  return (
    <Box
      sx={{
        display: "flex",
        width: isSmall ? "fit-content" : "150px",
        justifyContent: "space-between",
        gap: isSmall ? "1em" : "0",
        padding: "10px 20px",
        background: "white",
        alignItems: "flex-start",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
      }}
    >
      <Typography variant="body1">{item.name}</Typography>
      <Tooltip
        onClick={() => {
          dispatch(showItem(item));
          dispatch(showDisplayCard());
          dispatch(toggleSideBar());
        }}
        title="add item"
      >
        <Typography color="primary" sx={{ cursor: "pointer" }}>
          +
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default EachItem;
