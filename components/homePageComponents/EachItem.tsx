import { Button, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Item } from "@prisma/client";
import React, { useEffect } from "react";
import { showItem } from "../../app/ItemReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";

type itemType = {
  item: Item;
};

const EachItem = ({ item }: itemType) => {
  const dispatch = useAppDispatch();
  const itemData = useAppSelector((state) => state.item);

  useEffect(() => console.log(itemData), [itemData]);
  return (
    <Box
      sx={{
        display: "flex",
        width: "180px",
        justifyContent: "space-between",
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
          dispatch(
            showItem({
              ...item,
            })
          );
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
