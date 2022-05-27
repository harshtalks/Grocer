import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const BorderlineProgress = () => {
  return (
    <Box sx={{ height: "6px", width: "100%", background: "#E0E0E0" }}>
      <Box sx={{ height: "100%", width: "50%", background: "blue" }}></Box>
    </Box>
  );
};

const Progress = () => {
  return (
    <Box sx={{ margin: "20px 0", width: "80%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Banana</Typography>
        <Typography>12%</Typography>
      </Box>
      <BorderlineProgress />
    </Box>
  );
};

export default Progress;
