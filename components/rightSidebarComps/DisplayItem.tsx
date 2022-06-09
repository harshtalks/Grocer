/* eslint-disable @next/next/no-img-element */
import { Alert, Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { itemAdded } from "../../app/listReducer";
import { imageAdd } from "../../lib/helper";
import { showDisplayCard } from "../../app/ItemReducer";
import { toggleSideBar } from "../../app/layoutReducer";

interface displayDataType {
  title: string;
  content: string;
  isImage: boolean;
}

const ItemDisplayData = ({ title, content, isImage }: displayDataType) => {
  return (
    <Box sx={{ margin: "2rem 0", background: "white" }}>
      <Typography gutterBottom sx={{ color: "#C1C1C4" }} variant="body1">
        {title}
      </Typography>
      {isImage ? (
        <Box
          sx={{
            width: "300px",
            height: "220px",
            boxSshadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <img
            width={"300px"}
            height={"220px"}
            src={content ? content : imageAdd}
            alt={title}
            style={{
              objectFit: "contain",
            }}
          />
        </Box>
      ) : (
        <Typography>{content}</Typography>
      )}
    </Box>
  );
};

interface typeForDisplayItem {
  setAddedItem: React.Dispatch<React.SetStateAction<boolean>>;
}

const DisplayItem = ({ setAddedItem }: typeForDisplayItem) => {
  const item = useAppSelector((state) => state.item);
  const [image, setImage] = useState("");
  const dispatch = useAppDispatch();
  const shoppingList = useAppSelector((state) => state.lists);

  useEffect(() => {
    const query = item.name.toLowerCase();
    getImage(query);
  }, [item]);

  const doesItContain = () => {
    const name = item.name;
    const list = shoppingList.items.find((item) => item.name === name);

    if (list) {
      return true;
    } else return false;
  };

  const getImage = async (query: string) => {
    try {
      const res = await fetch(`${window.location.origin}/api/getImage`, {
        method: "POST",
        body: JSON.stringify({ query: query }, null, 2),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();
      setImage(result.results[0].urls.thumb);
    } catch (err) {
      console.error(err);
    }
  };

  if (!item) {
    return null;
  }

  return (
    <Box sx={{ padding: "2rem" }}>
      <Button
        onClick={() => {
          dispatch(showDisplayCard());
          dispatch(toggleSideBar());
        }}
        size="medium"
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
      {doesItContain() && (
        <Alert sx={{ marginTop: "10px" }} severity="success">
          This Item is already added to the list.
        </Alert>
      )}
      <ItemDisplayData isImage={true} title={"Image"} content={image} />
      <ItemDisplayData isImage={false} title={"Name"} content={item.name} />
      <ItemDisplayData
        isImage={false}
        title={"Category"}
        content={item.category.name}
      />
      <ItemDisplayData
        isImage={false}
        title={"Description"}
        content={item.description}
      />

      <Button
        onClick={() => {
          dispatch(showDisplayCard());
        }}
        sx={{ marginRight: "20px" }}
        color="secondary"
      >
        Cancel
      </Button>
      <Button
        disabled={doesItContain()}
        onClick={() => {
          dispatch(showDisplayCard());
          dispatch(itemAdded({ ...item, quantity: 1 }));
        }}
        variant="outlined"
      >
        Add to List
      </Button>
    </Box>
  );
};

export default DisplayItem;
