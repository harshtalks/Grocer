import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const BorderlineProgress = ({ type }: { type: "cat" | "item" }) => {
  return (
    <Box sx={{ height: "6px", width: "100%", background: "#E0E0E0" }}>
      <Box
        sx={{
          height: "100%",
          width: "50%",
          background: type === "item" ? "#F9A109" : "blue",
        }}
      ></Box>
    </Box>
  );
};

const Progress = ({ type }: { type: "cat" | "item" }) => {
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
      <BorderlineProgress type={type} />
    </Box>
  );
};

export default Progress;
