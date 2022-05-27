import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import { palette } from "@mui/system";
import { useRouter } from "next/router";

const ToolTipReplaced = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

type tooltipType = {
  title: string;
  jsxElement: JSX.Element;
  active?: boolean;
};

export default function ToolTipSidebar({
  title,
  jsxElement,
  active,
}: tooltipType) {
  const router = useRouter();
  return (
    <ToolTipReplaced placement="right" title={title}>
      {jsxElement}
    </ToolTipReplaced>
  );
}
