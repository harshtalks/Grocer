import { Button, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const EachItem = () => {
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
      <Typography variant="body1">Banana is a king we all love</Typography>
      <Tooltip title="add item">
        <Typography color="primary" sx={{ cursor: "pointer" }}>
          +
        </Typography>
      </Tooltip>
    </Box>
  );
};

export default EachItem;
