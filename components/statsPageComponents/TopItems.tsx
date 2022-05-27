import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Progress from "./Progress";

const TopItems = () => {
  return (
    <Box sx={{ padding: "4rem", paddingBottom: "1rem" }}>
      <Grid container spacing={4}>
        <Grid sx={{ width: "50%" }} item>
          <Typography variant="h5">Top Items</Typography>
          <Box sx={{ padding: "20px 0" }}>
            <Progress />
            <Progress />
            <Progress />
          </Box>
        </Grid>
        <Grid sx={{ width: "50%" }} item>
          <Typography variant="h5">Top Categories</Typography>
          <Box sx={{ padding: "20px 0" }}>
            <Progress />
            <Progress />
            <Progress />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopItems;
