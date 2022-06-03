import { Alert, Box, CircularProgress } from "@mui/material";
import { Category, Item } from "@prisma/client";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { loadPageData } from "../app/homePageReducer";
import Header from "../components/homePageComponents/Header";
import ItemsContainer from "../components/homePageComponents/ItemsContainer";
import Layout from "../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import useGetCategories from "../hooks/useGetCategories";
import { useGetItems } from "../hooks/useGetItems";
import { useGetMediaQueryMatches } from "../hooks/useGetMediaQueryMatches";

const Home: NextPage = () => {
  const { categories, isError, isLoading } = useGetCategories();
  const { isSmall, isSmallest } = useGetMediaQueryMatches();
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.homePageData.status);
  const items = useAppSelector((state) => state.homePageData.items);
  const error = useAppSelector((state) => state.homePageData.error);

  useEffect(() => {
    dispatch(loadPageData());
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
        <Header />
        {isLoading ? (
          <CircularProgress sx={{ marginLeft: isSmall ? "1rem" : "4rem" }} />
        ) : (
          <>
            {isError ? (
              <Alert
                sx={{ margin: isSmall ? "2rem 2rem" : "2rem 4rem" }}
                severity="error"
              >
                Error in fetching categories
              </Alert>
            ) : categories.length > 0 ? (
              categories.map((category: Category) => {
                return (
                  <ItemsContainer
                    items={
                      items &&
                      items.filter((el: Item) => el.categoryId === category.id)
                    }
                    status={status}
                    error={error}
                    categoryName={category.name}
                    key={category.id}
                    categoryId={category.id}
                  />
                );
              })
            ) : (
              <Alert
                sx={{ margin: isSmall ? "2rem 2rem" : "2rem 4rem" }}
                severity="error"
              >
                No Items Available, Please contact admin to add categories.{" "}
                <br /> contact: harshpareek91@gmail.com
              </Alert>
            )}
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
