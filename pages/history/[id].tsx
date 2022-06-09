/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { Button, Typography, Alert } from "@mui/material";
import { GetServerSideProps } from "next";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import ListItemContainer from "../../components/ListPageComponents/ItemContainer";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import prisma from "../../utils/prisma";
import { format } from "date-fns";
import { Category, ShoppingItem } from "@prisma/client";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { clearEverything, itemAdded } from "../../app/listReducer";

const Details = (props: any) => {
  const router = useRouter();
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  const dispatch = useAppDispatch();
  const data = JSON.parse(props.data);
  const error = props.error;

  const result: number[] = [];
  const categories: Category[] = [];

  const getCategories = () => {
    data.items.forEach((item: ShoppingItem & { category: Category }) => {
      if (!result.includes(item.categoryId)) {
        result.push(item.categoryId);
        categories.push(item.category);
      }
    });
  };

  //function
  const addBackToList = () => {
    data &&
      data.items.forEach((el: any) => {
        dispatch(clearEverything());
        dispatch(itemAdded(el));
      });
  };

  // addBackToList();

  getCategories();

  return (
    <Layout>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
        {error ? (
          <Alert
            sx={{
              margin: isSmall ? "2rem 1rem" : "2rem 4rem",
              whiteSpace: "pre-wrap",
            }}
            severity="error"
          >
            {error}
          </Alert>
        ) : (
          data && (
            <>
              <Box sx={{ padding: isSmall ? "2rem 1rem" : "2rem 4rem" }}>
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
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    gutterBottom
                    variant={isSmall ? "h6" : "h5"}
                  >
                    {data.name}
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
                    <Typography variant="body1">
                      {format(new Date(data.createdAt), "dd LLL, yyyy")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {categories.map((category: any) => {
                return (
                  <ListItemContainer
                    key={category.id}
                    category={category}
                    lists={data.items.filter(
                      (item: ShoppingItem & { category: Category }) => {
                        if (category.id === item.categoryId) return item;
                      }
                    )}
                  />
                );
              })}
            </>
          )
        )}
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query,
}: {
  req: any;
  query: any;
}) => {
  //

  let data;
  let error;
  try {
    data = await prisma.shoppingList.findUnique({
      where: {
        id: +query.id,
      },
      include: {
        items: {
          include: {
            category: true,
          },
        },
      },
    });
  } catch (e: any) {
    console.log(e);
    error = e.message;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  //
  return {
    props: {
      data: data ? JSON.stringify(data) : null,
      error: error || null,
    },
  };
};

export default Details;
