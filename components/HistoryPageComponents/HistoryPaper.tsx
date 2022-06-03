import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { format } from "date-fns";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import { eachListType } from "../../pages/history";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { itemAdded } from "../../app/listReducer";

const HistoryPaper = ({ list }: { list: eachListType }) => {
  const router = useRouter();
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  const date = format(new Date(list.createdAt), "dd MMM yyyy");
  return (
    <Box
      onClick={() => {
        router.push(`/history/${list.id}`);
      }}
      sx={{
        cursor: "pointer",
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
        {list.name}
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
        {list.isCompleted ? (
          <Button size={"small"} color="primary" variant="outlined">
            Completed
          </Button>
        ) : (
          <Button size={"small"} color="secondary" variant="outlined">
            Incomplete
          </Button>
        )}
        <ArrowForwardIosOutlinedIcon
          sx={{
            "&:hover": {
              color: "#80485B",
            },
            transition: "all 0.3s ease-in-out",
          }}
          fontSize={isSmall ? "small" : "medium"}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default HistoryPaper;
