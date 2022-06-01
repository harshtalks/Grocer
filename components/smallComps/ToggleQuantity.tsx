import React from "react";
import { Box, Button, Tooltip, Typography } from "@mui/material";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import CloseIcon from "@mui/icons-material/Close";
import { useAmp } from "next/amp";
import { useAppDispatch } from "../../hooks/reduxHooks";
import {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
} from "../../app/listReducer";

type toggleQtyType = {
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  quantity: number;
  id: number;
  setToggleQtyIncremental: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleQuantity = ({
  setQuantity,
  quantity,
  setToggleQtyIncremental,
  id,
}: toggleQtyType) => {
  //hooks
  const dispatch = useAppDispatch();
  //hooks

  return (
    <Box
      sx={{
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.5em",
        padding: "10px",
        borderRadius: "20px",
      }}
    >
      <Tooltip title="Delete">
        <DeleteSweepIcon
          fontSize="medium"
          color="primary"
          sx={{ cursor: "pointer" }}
          onClick={() => dispatch(deleteItem(id))}
        />
      </Tooltip>
      <Typography
        sx={{ cursor: "pointer" }}
        variant="h5"
        color={"primary"}
        onClick={() => {
          setQuantity((quantity) => quantity + 1);
          dispatch(increaseQuantity(id));
        }}
      >
        {"+"}
      </Typography>
      <Button
        size="small"
        color="primary"
        sx={{ borderRadius: "20px", fontSize: "12px" }}
        variant="outlined"
      >
        {quantity}
      </Button>
      <Typography
        variant="h5"
        sx={{ cursor: "pointer" }}
        color={"primary"}
        onClick={() => {
          if (quantity > 1) {
            setQuantity((quantity) => quantity - 1);
            dispatch(decreaseQuantity(id));
          }
        }}
      >
        {"-"}
      </Typography>
      <Tooltip title="Close">
        <CloseIcon
          color="primary"
          sx={{ cursor: "pointer" }}
          fontSize="medium"
          onClick={(toggleQtyIncremental) =>
            setToggleQtyIncremental(!toggleQtyIncremental)
          }
        />
      </Tooltip>
    </Box>
  );
};

export default ToggleQuantity;
