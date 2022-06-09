import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import RightSideBar from "../RightSidebar";
import SideBar from "../SideBar";

type layoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: layoutType) => {
  //hook for styles

  const { isMedium, isSmall, isSmallest } = useGetMediaQueryMatches();
  const [openSideBar, toggleOpenSideBar] = useState(false);
  const sidebarOpen = useAppSelector((state) => state.layout.sidebarOpen);

  useEffect(() => {
    if (isSmallest) {
      toggleOpenSideBar(false);
    }
  }, [isMedium, isSmall, isSmallest, openSideBar]);

  return (
    <div>
      <SideBar />
      {isMedium ? (
        <>
          <Box
            sx={{
              paddingLeft: isSmall ? "80px" : "100px",
              paddingRight: "0",
            }}
          >
            {children}
          </Box>
          {sidebarOpen && <RightSideBar />}
        </>
      ) : (
        <>
          <Box
            sx={{
              paddingLeft: "100px",
              paddingRight: "390px",
            }}
          >
            {children}
          </Box>
          {<RightSideBar />}
        </>
      )}
    </div>
  );
};

export default Layout;
