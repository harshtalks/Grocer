import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SummaryChart from "./Chart";

const Summary = () => {
  return (
    <Box sx={{ padding: "4rem" }}>
      <Typography variant="h5">Monthly Summary</Typography>
      <SummaryChart />
    </Box>
  );
};

export default Summary;
