import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";

const HeaderTitle = () => {
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  return (
    <Box
      sx={{
        padding: isSmall ? "4rem 1rem" : "4em",
      }}
    >
      <Typography sx={{ width: isSmall ? "80%" : "60%" }} variant="h4">
        Shopping History
      </Typography>
    </Box>
  );
};

export default HeaderTitle;
