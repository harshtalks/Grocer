import { Box, Button, Input } from "@mui/material";
import React from "react";
import { setName } from "../../app/listReducer";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";

const SaveList = () => {
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  const [name, toggleName] = React.useState("");
  const dispatch = useAppDispatch();
  return (
    <Box
      sx={{
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
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
          fullWidth={false}
          sx={{ padding: isSmall ? "10px 5px" : "10px" }}
          disableUnderline
          value={name}
          onChange={(e) => toggleName(e.target.value)}
        />
        <Button
          size={isSmall ? "small" : "large"}
          sx={{
            padding: isSmall ? "14px 10px" : "14px 30px",
            fontWeight: "bold",
          }}
          onClick={() => {
            dispatch(setName(name));
          }}
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default SaveList;
