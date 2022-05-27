import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { format } from "date-fns";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

const HistoryPaper = () => {
  const date = format(new Date(), "dd MMM yyyy");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        background: "#FFFFFF",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        padding: "20px",
        margin: "20px 0",
      }}
    >
      <Typography variant="h6">Grocery List</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1em",
        }}
      >
        <CalendarMonthOutlinedIcon sx={{ opacity: "0.5" }} />
        <Typography sx={{ opacity: "0.5" }}>{date}</Typography>
        <Button color="primary" variant="outlined">
          Completed
        </Button>
        <ArrowForwardIosOutlinedIcon color="primary" />
      </Box>
    </Box>
  );
};

export default HistoryPaper;
