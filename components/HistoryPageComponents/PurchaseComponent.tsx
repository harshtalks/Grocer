import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HistoryPaper from "./HistoryPaper";

const PurchaseComponent = () => {
  return (
    <Box sx={{ padding: "0 4rem", marginBottom: "40px" }}>
      <Typography variant="body1">August 2020</Typography>
      <Box>
        <HistoryPaper />
        <HistoryPaper />
        <HistoryPaper />
        <HistoryPaper />
        <HistoryPaper />
      </Box>
    </Box>
  );
};

export default PurchaseComponent;
