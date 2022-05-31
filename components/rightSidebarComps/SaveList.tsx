import { Box, Button, Input } from "@mui/material";
import React from "react";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";

const SaveList = () => {
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  return (
    <Box
      sx={{
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: isSmall ? "0 10px" : "0",
      }}
    >
      <Box
        sx={{
          border: "1px solid #F9A109",
          borderRadius: "10px",
        }}
      >
        <Input
          placeholder="Add Name"
          sx={{ padding: "10px 10px" }}
          disableUnderline
        />
        <Button
          size={isSmall ? "small" : "large"}
          sx={{
            padding: isSmall ? "14px 20px" : "14px 30px",
            fontWeight: "bold",
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default SaveList;
