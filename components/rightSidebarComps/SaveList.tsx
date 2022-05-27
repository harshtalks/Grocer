import { Box, Button, Input } from "@mui/material";
import React from "react";

const SaveList = () => {
  return (
    <Box
      sx={{
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
        <Button size="large" sx={{ padding: "14px 30px", fontWeight: "bold" }}>
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default SaveList;
