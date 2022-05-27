import { Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import GuyWithGlass from "../assets/svg/black.svg";

const Error: NextPage = () => {
  return (
    <Box sx={{ width: "100vw", height: "100vh", textAlign: "center" }}>
      <Image src={GuyWithGlass} alt="guy with glass" />
      <Typography sx={{ fontWeight: "bold" }} variant="h2">
        OH NO!
      </Typography>
      <Typography
        gutterBottom
        sx={{ fontWeight: "bold" }}
        variant="h1"
        color={"primary"}
      >
        You Broke Grocers ;(
      </Typography>
      <Typography variant="h6">
        Go back to <Link href="/">HomePage</Link>
      </Typography>
    </Box>
  );
};

export default Error;
