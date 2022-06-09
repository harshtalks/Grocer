import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Switch from "@mui/material/Switch";
//importing icons
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import ReplayIcon from "@mui/icons-material/Replay";
import DataThresholdingOutlinedIcon from "@mui/icons-material/DataThresholdingOutlined";
import ToolTipSidebar from "./smallComps/ToolTip";
import { Avatar, Badge, Tabs, Typography } from "@mui/material";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import { useRouter } from "next/router";
import Account from "./smallComps/Account";
import { useGetMediaQueryMatches } from "../hooks/useGetMediaQueryMatches";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { closeSideBar, toggleSideBar } from "../app/layoutReducer";
//importing other stuffs

export default function SideBar() {
  const [value, setValue] = React.useState("1");
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const listItems = useAppSelector((state) => state.lists.items);

  return (
    <Box
      sx={{
        width: isSmall ? "80px" : "100px",
        height: "100vh",
        background: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "4em 0",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Box>
        <Typography
          variant={isSmall ? "body1" : "h6"}
          color="primary.main"
          sx={{ fontWeight: "bold" }}
        >
          Grocers
        </Typography>
        {/* <ThemeSwitch /> */}
      </Box>
      <Account />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4rem",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              background: "#F9A109",
              width: "8px",
              borderBottomRightRadius: "10px",
              borderTopRightRadius: "10px",
              left: "0",
            },
          }}
          orientation="vertical"
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="tabs to access different functionalities"
        >
          <Tab
            onClick={() => {
              dispatch(closeSideBar());
              router.push("/");
            }}
            value={"1"}
            icon={
              <ToolTipSidebar
                title="Items"
                jsxElement={<FormatListBulletedIcon />}
              />
            }
          />
          <Tab
            onClick={() => {
              dispatch(closeSideBar());
              router.push("/history");
            }}
            value={"2"}
            icon={
              <ToolTipSidebar title="History" jsxElement={<ReplayIcon />} />
            }
          />
          <Tab
            onClick={() => {
              dispatch(closeSideBar());
              router.push("/stats");
            }}
            value={"3"}
            icon={
              <ToolTipSidebar
                title="statistics"
                jsxElement={<DataThresholdingOutlinedIcon />}
              />
            }
          />
        </Tabs>
      </Box>
      <Badge
        onClick={() => dispatch(toggleSideBar())}
        sx={{ cursor: "pointer" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        badgeContent={
          listItems &&
          listItems.length > 0 && (
            <Avatar
              sx={{
                transform: "scale(0.8)",
                background: "#EB5757",
              }}
            >
              <Typography sx={{ fontWeight: "bold" }} variant="body1">
                {listItems.length}
              </Typography>
            </Avatar>
          )
        }
      >
        <Avatar sx={{ padding: "20px", background: "#F9A109" }}>
          <AddShoppingCartTwoToneIcon fontSize="medium" />
        </Avatar>
      </Badge>
    </Box>
  );
}
