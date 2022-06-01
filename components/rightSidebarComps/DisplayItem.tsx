/* eslint-disable @next/next/no-img-element */
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAppSelector } from "../../hooks/reduxHooks";
import Image from "next/image";

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
        <Box sx={{ width: "300px", height: "220px" }}>
          <img
            src={content}
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
  if (!item) {
    return null;
  }

  return (
    <Box sx={{ padding: "2rem" }}>
      <Button
        onClick={() => setAddedItem((e) => !e)}
        size="medium"
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
      <ItemDisplayData
        isImage={true}
        title={"Image"}
        content={item.imageLink}
      />
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

      <Button sx={{ marginRight: "20px" }} color="secondary">
        Delete
      </Button>
      <Button variant="outlined">Add to List</Button>
    </Box>
  );
};

export default DisplayItem;
