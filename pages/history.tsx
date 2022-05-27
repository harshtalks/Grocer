import { Box } from "@mui/material";
import { NextPage } from "next";
import HeaderTitle from "../components/HistoryPageComponents/HeaderTitle";
import PurchaseComponent from "../components/HistoryPageComponents/PurchaseComponent";
import Layout from "../components/layout/Layout";

const History: NextPage = () => {
  return (
    <Layout>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
        <HeaderTitle />
        <PurchaseComponent />
        <PurchaseComponent />
      </Box>
    </Layout>
  );
};

export default History;
