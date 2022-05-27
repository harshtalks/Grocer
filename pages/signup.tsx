import { Box, Button, Grid, Input, Link, Typography } from "@mui/material";
import { NextPage } from "next";
import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const signup: NextPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState(false);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #F37335, #FDC830)",
      }}
    >
      <Box
        sx={{
          width: "500px",
          display: "flex",
          padding: "4rem",
          flexDirection: "column",
          background: "white",
          borderRadius: "1em",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <Typography
          textAlign={"center"}
          gutterBottom
          variant="h4"
          sx={{ fontWeight: "bold" }}
        >
          Create Account
        </Typography>
        <Typography textAlign={"center"} variant="body1">
          Already have an Account? <Link href="/signin">Sign in</Link>
        </Typography>
        <Box sx={{ marginTop: "2em", width: "100%" }}>
          <Input
            placeholder="Email"
            fullWidth
            disableUnderline
            type="email"
            sx={{
              background: "#EBEBEB",
              padding: "5px 10px",
              borderRadius: "10px",
            }}
          />
        </Box>
        <Box
          sx={{
            margin: "15px 0",
            display: "flex",
            alignItems: "center",
            gap: "0.5em",
          }}
        >
          <Input
            fullWidth
            placeholder="First Name"
            disableUnderline
            sx={{
              background: "#EBEBEB",
              padding: "5px 10px",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          />

          <Input
            placeholder="Last Name"
            disableUnderline
            fullWidth
            sx={{
              background: "#EBEBEB",
              padding: "5px 10px",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
            }}
          />
        </Box>
        <Input
          placeholder="Password"
          fullWidth
          disableUnderline
          type={visible ? "text" : "password"}
          sx={{
            background: "#EBEBEB",
            padding: "5px 10px",
            borderRadius: "10px",
          }}
        />
        <Button
          onClick={() => setVisible(!visible)}
          size="small"
          color="secondary"
          sx={{ width: "fit-content", margin: "5px 0" }}
          endIcon={
            visible ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />
          }
        >
          {visible ? "Hide" : "Show"} password
        </Button>
        <Button
          endIcon={<ArrowForwardOutlinedIcon />}
          variant="outlined"
          size="large"
          sx={{ margin: "10px 0" }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};
export default signup;
