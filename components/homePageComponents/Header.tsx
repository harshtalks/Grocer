import { Box, Input, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "4em",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Typography sx={{ width: "60%" }} variant="h5">
        <span style={{ color: "#F9A109;" }}>Shoppingify</span> allows you take
        your shopping list wherever you go
      </Typography>
      <Box
        sx={{
          boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.04)",
          padding: "5px 20px",
          borderRadius: "12px",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <SearchIcon />
        <Input placeholder="Search Items" disableUnderline />
      </Box>
    </Box>
  );
};

export default Header;
