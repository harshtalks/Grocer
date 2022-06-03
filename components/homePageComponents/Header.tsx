import { Box, Input, Typography } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";

const Header = () => {
  // mediaQueryHook
  const { isMedium, isSmall, isSmallest } = useGetMediaQueryMatches();

  return (
    <Box
      sx={{
        display: "flex",
        padding: isSmall ? "1em" : "4em",
        flexDirection: isSmall ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Typography
        sx={{ width: isSmall ? "100%" : "60%" }}
        variant={isMedium ? "h6" : "h5"}
      >
        <span style={{ color: "#F9A109" }}>Grocer</span> allows you take your
        shopping list wherever you go
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
          marginTop: isSmall ? "1em" : "0",
        }}
      >
        <SearchIcon />
        <Input placeholder="Search Items" disableUnderline />
      </Box>
    </Box>
  );
};

export default Header;
