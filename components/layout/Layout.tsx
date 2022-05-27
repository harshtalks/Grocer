import { Box } from "@mui/system";
import React from "react";
import RightSideBar from "../RightSidebar";
import SideBar from "../SideBar";

type layoutType = {
  children: React.ReactNode;
};

const Layout = ({ children }: layoutType) => {
  return (
    <div>
      <SideBar />
      <Box sx={{ paddingLeft: "100px", paddingRight: "390px" }}>{children}</Box>
      <RightSideBar />
    </div>
  );
};

export default Layout;
