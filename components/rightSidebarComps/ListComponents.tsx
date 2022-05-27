import { Box, Typography } from "@mui/material";
import React from "react";
import Item from "../smallComps/Item";

type listComponenttype = {
  listItemsType: string;
};
const ListComponents = ({ listItemsType }: listComponenttype) => {
  return (
    <Box sx={{ marginTop: "2rem", fontWeight: 700 }}>
      <Typography gutterBottom variant="body2" sx={{ opacity: 0.5 }}>
        {listItemsType}
      </Typography>
      <Box>
        <Item name="Cabbage" qty={1} />
        <Item name="Cabbage" qty={1} />
        <Item name="Cabbage" qty={1} />
      </Box>
    </Box>
  );
};

export default ListComponents;
