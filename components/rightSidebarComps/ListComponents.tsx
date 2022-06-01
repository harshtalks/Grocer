import { Box, Typography } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import Item from "../smallComps/Item";

type listComponenttype = {
  listItemsType: string;
};
const ListComponents = ({ listItemsType }: listComponenttype) => {
  const listData = useAppSelector((state) => state.lists.items);

  const finalList = listData.filter((item) => {
    return item.category.name === listItemsType;
  });

  return (
    <Box sx={{ marginTop: "2rem", fontWeight: 700 }}>
      <Typography gutterBottom variant="body2" sx={{ opacity: 0.5 }}>
        {listItemsType}
      </Typography>
      <Box>
        {finalList.map((item) => {
          return (
            <Item
              id={item.id}
              key={item.id}
              name={item.name}
              qty={item.quantity}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ListComponents;
