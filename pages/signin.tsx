import { Box, Button, Input, Link, Typography } from "@mui/material";
import { NextPage } from "next";
import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import { useRouter } from "next/router";
import { auth } from "../lib/mutations";
import { useGetMediaQueryMatches } from "../hooks/useGetMediaQueryMatches";
import Head from "next/head";
const Signin: NextPage = () => {
  const [visible, setVisible] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [warningContent, setWarningContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isSmall, isMedium, isSmallest } = useGetMediaQueryMatches();

  const router = useRouter();

  const clearForm = () => {
    setPassword("");
    setEmail("");
  };

  const handlerSubmit = async () => {
    if (!email || !password) {
      setShowWarning(true);
      setWarningContent("All fields are required");
      return;
    }
    setShowWarning(false);
    setIsLoading(true);
    setWarningContent("");

    try {
      const response = await auth("signin", {
        email: email,
        password: password,
      });

      if (response.error) {
        throw new Error(response.error);
      }

      setIsLoading(false);
      router.push("/");
    } catch (e: any) {
      setIsLoading(false);
      setShowWarning(true);
      clearForm();
      setWarningContent(e.message);
    }
  };

  //hooks for the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
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
            maxWidth: "500px",
            width: "80%",
            display: "flex",
            padding: isSmall ? "2rem 1rem" : "4rem",
            flexDirection: "column",
            background: "white",
            borderRadius: "1em",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <Typography
            gutterBottom
            textAlign={"center"}
            color={"primary"}
            sx={{ fontWeight: "bold" }}
            variant="h4"
          >
            Grocer
          </Typography>
          {showWarning && (
            <Alert sx={{ margin: "20px 0" }} severity="error">
              {warningContent}
            </Alert>
          )}
          <Typography
            textAlign={"center"}
            gutterBottom
            variant="h4"
            sx={{ fontWeight: "bold" }}
          >
            Sign In
          </Typography>
          <Typography textAlign={"center"} variant="body1">
            Do not have an Account? <Link href="/signup">Sign up</Link>
          </Typography>
          <Box sx={{ marginTop: "2em", width: "100%" }}>
            <Input
              required
              value={email}
              onChange={(e) => {
                setShowWarning(false);
                setEmail(e.target.value);
              }}
              placeholder="Email"
              fullWidth
              disableUnderline
              type="email"
              sx={{
                background: "#EBEBEB",
                padding: "5px 10px",
                borderRadius: "10px",
                margin: "10px 0",
              }}
            />
          </Box>
          <Input
            required
            value={password}
            onChange={(e) => {
              setShowWarning(false);
              setPassword(e.target.value);
            }}
            placeholder="Password"
            fullWidth
            disableUnderline
            type={visible ? "text" : "password"}
            sx={{
              background: "#EBEBEB",
              padding: "5px 10px",
              borderRadius: "10px",
              margin: "10px 0",
            }}
          />
          <Button
            onClick={() => setVisible(!visible)}
            size="small"
            color="secondary"
            sx={{ width: "fit-content", margin: "5px 0" }}
            endIcon={
              visible ? (
                <VisibilityOffOutlinedIcon />
              ) : (
                <VisibilityOutlinedIcon />
              )
            }
          >
            {visible ? "Hide" : "Show"} password
          </Button>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <Button
              endIcon={<ArrowForwardOutlinedIcon />}
              variant="outlined"
              size="large"
              sx={{ margin: "10px 0" }}
              onClick={() => handlerSubmit()}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};
export default Signin;
