import { Box, Tooltip, Typography } from "@mui/material";
import { ShoppingItem } from "@prisma/client";
import React from "react";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";

const Item = ({ itemData }: { itemData: ShoppingItem }) => {
  const { isSmall, isSmallest } = useGetMediaQueryMatches();

  return (
    <Box
      sx={{
        display: "flex",
        width: isSmall ? "fit-content" : "150px",
        justifyContent: "space-between",
        gap: isSmall ? "1em" : "0.5em",
        padding: "10px 20px",
        background: "white",
        alignItems: "flex-start",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
      }}
    >
      <Typography variant="body1">{itemData.name}</Typography>
      <Tooltip title="Quantity">
        <Typography sx={{ fontSize: "14px" }} color="primary">
          {itemData.quantity}
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default Item;
