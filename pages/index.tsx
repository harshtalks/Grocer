import { Alert, Box, CircularProgress } from "@mui/material";
import { Category, Item } from "@prisma/client";
import type { NextPage } from "next";
import Header from "../components/homePageComponents/Header";
import ItemsContainer from "../components/homePageComponents/ItemsContainer";
import Layout from "../components/layout/Layout";
import useGetCategories from "../hooks/useGetCategories";
import { useGetItems } from "../hooks/useGetItems";
import { useGetMediaQueryMatches } from "../hooks/useGetMediaQueryMatches";

const Home: NextPage = () => {
  const { categories, isError, isLoading } = useGetCategories();
  const { isSmall, isSmallest } = useGetMediaQueryMatches();
  const {
    items,
    isLoading: loaderForItems,
    isError: errorForItems,
  } = useGetItems();

  console.log(categories);

  return (
    <Layout>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
        <Header />
        {isLoading ? (
          <CircularProgress sx={{ marginLeft: "4rem" }} />
        ) : (
          <>
            {isError ? (
              <Alert
                sx={{ margin: isSmall ? "2rem 2rem" : "2rem 4rem" }}
                severity="error"
              >
                Error in fetching categories
              </Alert>
            ) : (
              categories &&
              categories.map((category: Category) => {
                return (
                  <ItemsContainer
                    items={
                      items &&
                      items.filter((el: Item) => el.categoryId === category.id)
                    }
                    isLoading={loaderForItems}
                    isError={errorForItems}
                    categoryName={category.name}
                    key={category.id}
                    categoryId={category.id}
                  />
                );
              })
            )}
          </>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
