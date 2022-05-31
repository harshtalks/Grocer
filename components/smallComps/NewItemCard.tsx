import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Person from "../../assets/svg/person.svg";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
type newItemCardType = {
  toggleAddNewItem: React.Dispatch<React.SetStateAction<boolean>>;
};
const NewItemCard = ({ toggleAddNewItem }: newItemCardType) => {
  const { isSmall, isSmallest } = useGetMediaQueryMatches();
  return (
    <Box
      sx={{
        width: isSmall ? "100%" : "310px",
        height: isSmall ? "fit-content" : "130px",
        background: "#80485B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderRadius: "1.5rem",
        padding: isSmall ? "1em 0.5em" : "0 1em",
      }}
    >
      <Image src={Person} width={200} height={200} alt="person" />
      <Box>
        <Typography
          gutterBottom
          variant="body1"
          sx={{ fontSize: isSmall ? "0.9rem" : "1rem" }}
        >
          Did not find what you need?
        </Typography>
        <Button
          onClick={() => toggleAddNewItem((el) => !el)}
          color="primary"
          variant="outlined"
          size={isSmall ? "small" : "medium"}
        >
          Add Item
        </Button>
      </Box>
    </Box>
  );
};

export default NewItemCard;
