/* eslint-disable react/no-unescaped-entities */
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../../components/layout/Layout";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  return (
    <Layout>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
        <Box sx={{ padding: "4rem" }}>
          <Button
            onClick={() => {
              router.back();
            }}
            startIcon={<ArrowBackIcon />}
            size="large"
          >
            Back
          </Button>
          <Box sx={{ margin: "2em 0" }}>
            <Typography sx={{ fontWeight: "bold" }} gutterBottom variant="h5">
              Eroda's Birthday Party
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#C1C1C4",
                gap: "20px",
                marginTop: "10px",
              }}
            >
              <DateRangeOutlinedIcon />
              <Typography variant="body1">14 Aug 2022</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Details;
