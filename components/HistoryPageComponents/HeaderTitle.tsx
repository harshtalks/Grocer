import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const HeaderTitle = () => {
  return (
    <Box
      sx={{
        padding: "4em",
      }}
    >
      <Typography sx={{ width: "60%" }} variant="h4">
        Shopping History
      </Typography>
    </Box>
  );
};

export default HeaderTitle;
