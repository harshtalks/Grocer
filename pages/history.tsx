import { Alert, Box, Button, CircularProgress } from "@mui/material";
import { Category, ShoppingItem, ShoppingList } from "@prisma/client";
import { format } from "date-fns";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { loadHistoryData } from "../app/historyPageReducer";
import HeaderTitle from "../components/HistoryPageComponents/HeaderTitle";
import PurchaseComponent from "../components/HistoryPageComponents/PurchaseComponent";
import Layout from "../components/layout/Layout";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { useGetMediaQueryMatches } from "../hooks/useGetMediaQueryMatches";
export interface monthlyDataType {
  [key: string]: Array<
    ShoppingList & { items: Array<ShoppingItem & { category: Category }> }
  >;
}
export type eachListType = ShoppingList & {
  items: Array<ShoppingItem & { category: Category }>;
};

export type monthType = Array<
  ShoppingList & { items: Array<ShoppingItem & { category: Category }> }
>;

const History: NextPage = () => {
  const router = useRouter();
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  const dispatch = useAppDispatch();
  const { status, lists, error } = useAppSelector(
    (state) => state.historyPageData
  );
  const [monthlyData, setMonthlyData] = useState({} as monthlyDataType);
  useEffect(() => {
    dispatch(loadHistoryData());
    // monthlyList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const monthlyList = () => {
    const result = {} as monthlyDataType;
    if (error) {
      return result;
    }
    lists &&
      lists.forEach((list) => {
        const date = format(new Date(list.createdAt), "LLLL, yyyy");
        if (!result[date]) {
          result[date] = [];
        }
        result[date].push(list);
      });
    return result;
  };

  const monthlyLists = monthlyList();

  return (
    <Layout>
      <Head>
        <title>History</title>
      </Head>
      <Box sx={{ overflow: "auto", height: "100vh" }}>
        <HeaderTitle />
        {status === "loading" ? (
          <CircularProgress sx={{ margin: isSmall ? "0 1rem" : "0 4rem" }} />
        ) : error ? (
          <Alert
            sx={{ margin: isSmall ? "0rem 1rem" : "0rem 4rem" }}
            severity="warning"
          >
            {error}
          </Alert>
        ) : (
          <>
            {lists && lists.length === 0 ? (
              <Alert
                action={
                  <Button onClick={() => router.push("/")}>Make A List</Button>
                }
                sx={{ margin: isSmall ? "0rem 1rem" : "0rem 4rem" }}
                severity="warning"
              >
                You have not made any lists yet.{" "}
                <strong>Make your first list now</strong>
              </Alert>
            ) : (
              Object.keys(monthlyLists).map((month: string) => {
                return (
                  <PurchaseComponent
                    key={month}
                    month={month}
                    lists={monthlyLists[month]}
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

export default History;
