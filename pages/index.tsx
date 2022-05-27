import { Box } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/homePageComponents/Header";
import ItemsContainer from "../components/homePageComponents/ItemsContainer";
import Layout from "../components/layout/Layout";
import RightSideBar from "../components/RightSidebar";
import SideBar from "../components/SideBar";

const Home: NextPage = () => {
  return (
    <Layout>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
        <Header />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
        <ItemsContainer />
      </Box>
    </Layout>
  );
};

export default Home;
