import { Box } from "@mui/material";
import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import Summary from "../components/statsPageComponents/Summary";
import TopItems from "../components/statsPageComponents/TopItems";

const Stats: NextPage = () => {
  return (
    <Layout>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
        <TopItems />
        <Summary />
      </Box>
    </Layout>
  );
};

export default Stats;
