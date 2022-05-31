import { useMediaQuery, useTheme } from "@mui/material";

export const useGetMediaQueryMatches = () => {
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isSmallest = useMediaQuery(theme.breakpoints.down("xs"));

  return { isMedium, isSmall, isSmallest };
};
