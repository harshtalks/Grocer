import { Box } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import HeaderTitle from "../components/HistoryPageComponents/HeaderTitle";
import PurchaseComponent from "../components/HistoryPageComponents/PurchaseComponent";
import Layout from "../components/layout/Layout";

const History: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>History</title>
      </Head>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
        <HeaderTitle />
        <PurchaseComponent />
        <PurchaseComponent />
      </Box>
    </Layout>
  );
};

export default History;
