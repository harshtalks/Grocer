import { Box, Grid, Typography } from "@mui/material";
import { Category, ShoppingItem } from "@prisma/client";
import React from "react";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import Item from "./Item";

type ContainerType = {
  lists: Array<ShoppingItem & { category: Category }>;
  category: Category;
};

const ListItemContainer = ({ lists, category }: ContainerType) => {
  const { isMedium, isSmall, isSmallest } = useGetMediaQueryMatches();
  if (lists.length === 0) {
    return null;
  }
  return (
    <Box sx={{ padding: isSmall ? "0 1em" : "0 4em", marginBottom: "4rem" }}>
      <Typography sx={{ marginBottom: "20px" }} variant="body1">
        {category.name}
      </Typography>
      <Grid container spacing={2}>
        {lists.map((listData) => {
          return (
            <Grid key={listData.id} item>
              <Item itemData={listData} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ListItemContainer;
