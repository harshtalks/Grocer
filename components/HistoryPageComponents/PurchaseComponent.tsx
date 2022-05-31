import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import HistoryPaper from "./HistoryPaper";

const PurchaseComponent = () => {
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  return (
    <Box sx={{ padding: isSmall ? "0 2rem" : "0 4rem", marginBottom: "40px" }}>
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
