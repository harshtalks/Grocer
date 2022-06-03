/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { Button, Typography, Alert } from "@mui/material";
import {
  GetServerSideProps,
  GetStaticPaths,
  GetStaticProps,
  NextApiRequest,
} from "next";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import ListItemContainer from "../../components/ListPageComponents/ItemContainer";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import Fetcher from "../../lib/fetcher";
import { loadIdPageData } from "../../app/IdpageReducer";
import absoluteUrl from "next-absolute-url";
import { validateToken } from "../../protection/auth";
import prisma from "../../utils/prisma";
import { format } from "date-fns";
import { Category, ShoppingItem } from "@prisma/client";

const Details = (props: any) => {
  const router = useRouter();
  const data = JSON.parse(props.data);
  const error = props.error;
  const categories = data
    ? data.items.map((el: ShoppingItem & { category: Category }) => {
        const result: number[] = [];

        if (!result.includes(el.categoryId)) {
          result.push(el.categoryId);
          return el.category;
        }
      })
    : null;
  console.log(categories);
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
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

  //
  return {
    props: {
      data: data ? JSON.stringify(data) : null,
      error: error || null,
    },
  };
};

export default Details;
