import { Button, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Item } from "@prisma/client";
import React from "react";
type itemType = {
  item: Item;
};

const EachItem = ({ item }: itemType) => {
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
      <Tooltip title="add item">
        <Typography color="primary" sx={{ cursor: "pointer" }}>
          +
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default EachItem;
