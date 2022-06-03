import { Box, Button } from "@mui/material";
import React from "react";

const EditListActions = () => {
  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        display: "flex",
        justifyContent: "center",
        gap: "1em",
        alignItems: "center",
      }}
    >
      <Button variant="text">Cancel</Button>
      <Button variant="outlined">Complete</Button>
    </Box>
  );
};

export default EditListActions;
