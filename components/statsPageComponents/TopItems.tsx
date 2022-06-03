import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import Progress from "./Progress";

const TopItems = () => {
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();

  return (
    <Box
      sx={{ padding: isSmall ? "4rem 1rem" : "4rem", paddingBottom: "1rem" }}
    >
      <Grid container spacing={4}>
        <Grid sx={{ width: isSmall ? "100%" : "50%" }} item>
          <Typography variant="h5">Top Items</Typography>
          <Box sx={{ padding: "20px 0" }}>
            <Progress type="item" />
            <Progress type="item" />
            <Progress type="item" />
          </Box>
        </Grid>
        <Grid sx={{ width: isSmall ? "100%" : "50%" }} item>
          <Typography variant="h5">Top Categories</Typography>
          <Box sx={{ padding: "20px 0" }}>
            <Progress type="cat" />
            <Progress type="cat" />
            <Progress type="cat" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopItems;
