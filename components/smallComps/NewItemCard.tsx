import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Person from "../../assets/svg/person.svg";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
type newItemCardType = {
  toggleAddNewItem: React.Dispatch<React.SetStateAction<boolean>>;
};
const NewItemCard = ({ toggleAddNewItem }: newItemCardType) => {
  return (
    <Box
      sx={{
        width: "310px",
        height: "130px",
        background: "#80485B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderRadius: "1.5rem",
        padding: "0 1em",
      }}
    >
      <Image src={Person} width={200} height={200} alt="person" />
      <Box>
        <Typography gutterBottom variant="body1">
          Did not find what you need?
        </Typography>
        <Button
          onClick={() => toggleAddNewItem((el) => !el)}
          color="primary"
          variant="outlined"
        >
          Add Item
        </Button>
      </Box>
    </Box>
  );
};

export default NewItemCard;
