import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import ToggleQuantity from "./ToggleQuantity";

type itemType = {
  name: string;
  qty: number;
  id: number;
};

const Item = ({ name, qty, id }: itemType) => {
  const [toggleQtyIncremental, setToggleQtyIncremental] = React.useState(false);
  const { isSmall, isSmallest } = useGetMediaQueryMatches();

  const [qtyValue, setQtyValue] = React.useState(qty);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "10px 0",
      }}
    >
      <Typography variant={isSmall ? "body1" : "h6"}>{name}</Typography>
      {toggleQtyIncremental ? (
        <ToggleQuantity
          id={id}
          setToggleQtyIncremental={setToggleQtyIncremental}
          quantity={qtyValue}
          setQuantity={setQtyValue}
        />
      ) : (
        <Button
          onClick={() => setToggleQtyIncremental(!toggleQtyIncremental)}
          size="small"
          sx={{ borderRadius: "20px", fontSize: "12px" }}
          variant="outlined"
        >
          {qtyValue} pcs
        </Button>
      )}
    </Box>
  );
};

export default Item;
