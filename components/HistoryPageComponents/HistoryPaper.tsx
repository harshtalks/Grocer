import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { format } from "date-fns";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";

const HistoryPaper = () => {
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  const date = format(new Date(), "dd MMM yyyy");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: isSmall ? "flex-start" : "center",
        justifyContent: isSmall ? "flex-start" : "space-between",
        flexWrap: "wrap",
        width: "100%",
        background: "#FFFFFF",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        padding: "20px",
        margin: "20px 0",
        flexDirection: isSmall ? "column" : "row",
      }}
    >
      <Typography
        sx={{ fontWeight: isSmall ? "bold" : "normal" }}
        variant={isSmall ? "body1" : "h6"}
      >
        Grocery List
      </Typography>
      <Box
        sx={{
          marginTop: isSmall ? "10px" : "0",
          display: "flex",
          alignItems: "center",
          justifyContent: isSmall ? "flex-start" : "space-between",
          flexWrap: "wrap",
          gap: "1em",
        }}
      >
        <CalendarMonthOutlinedIcon
          fontSize={isSmall ? "small" : "medium"}
          sx={{ opacity: "0.5" }}
        />
        <Typography
          variant={isSmall ? "body2" : "body1"}
          sx={{ opacity: "0.5" }}
        >
          {date}
        </Typography>
        <Button
          size={isSmall ? "small" : "medium"}
          color="primary"
          variant="outlined"
        >
          Completed
        </Button>
        <ArrowForwardIosOutlinedIcon
          fontSize={isSmall ? "small" : "medium"}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default HistoryPaper;
