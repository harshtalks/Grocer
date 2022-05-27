import { Box, Grid, Typography } from "@mui/material";
import { truncateSync } from "fs";
import React from "react";
import EachItem from "./EachItem";

const ItemsContainer = () => {
  return (
    <Box sx={{ padding: "0 4em", marginBottom: "2rem" }}>
      <Typography sx={{ marginBottom: "20px" }} variant="body1">
        Fruits and vegetables
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <EachItem />
        </Grid>
        <Grid item>
          <EachItem />
        </Grid>
        <Grid item>
          <EachItem />
        </Grid>
        <Grid item>
          <EachItem />
        </Grid>
        <Grid item>
          <EachItem />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ItemsContainer;
