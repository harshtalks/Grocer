import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import { monthType, eachListType } from "../../pages/history";
import HistoryPaper from "./HistoryPaper";

const PurchaseComponent = ({
  month,
  lists,
}: {
  month: string;
  lists: monthType;
}) => {
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  return (
    <Box sx={{ padding: isSmall ? "0 1rem" : "0 4rem", marginBottom: "40px" }}>
      <Typography variant="body1">{month}</Typography>
      <Box>
        {lists.map((list: eachListType) => {
          return <HistoryPaper key={list.id} list={list} />;
        })}
      </Box>
    </Box>
  );
};

export default PurchaseComponent;
