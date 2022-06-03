import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import SummaryChart from "./Chart";

const Summary = () => {
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  return (
    <Box sx={{ padding: isSmall ? "0rem 1rem" : "4rem" }}>
      <Typography variant="h5">Monthly Summary</Typography>
      <SummaryChart />
    </Box>
  );
};

export default Summary;
