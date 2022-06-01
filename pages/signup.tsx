import { Box, Button, Input, Link, Typography } from "@mui/material";
import { NextPage } from "next";
import React, { useState } from "react";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { auth } from "../lib/mutations";
import { useRouter } from "next/router";
import { useGetMediaQueryMatches } from "../hooks/useGetMediaQueryMatches";
import Head from "next/head";

const Signup: NextPage = () => {
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [visible, setVisible] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [warningContent, setWarningContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //hooks for the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // hooks for the styling
  const { isMedium, isSmall, isSmallest } = useGetMediaQueryMatches();

  const clearForm = () => {
    setPassword("");
    setEmail("");
    setFirstName("");
    setLastName("");
  };

  const handlerSubmit = async () => {
    if (!email || !password || !firstName || !lastName) {
      setShowWarning(true);
      setWarningContent("All fields are required");
      return;
    }
    setShowWarning(false);
    setWarningContent("");
    setIsLoading(true);

    // const result = await response.json();
    // if (response.status === 401) {
    //   setIsLoading(false);
    //   setShowWarning(true);
    //   clearForm();
    //   setWarningContent(result.error);
    //   return;
    // } else {
    //   setIsLoading(false);
    //   router.push("/");
    // }

    try {
      const response = await auth("signup", {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
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

  return (
    <>
      <Head>
        <title>Sign Up</title>
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
            Create Account
          </Typography>
          <Typography textAlign={"center"} variant="body1">
            Already have an Account? <Link href="/signin">Sign in</Link>
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
              required
              value={firstName}
              onChange={(e) => {
                setShowWarning(false);
                setFirstName(e.target.value);
              }}
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
              required
              value={lastName}
              onChange={(e) => {
                setShowWarning(false);
                setLastName(e.target.value);
              }}
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
              Sign Up
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
};
export default Signup;
