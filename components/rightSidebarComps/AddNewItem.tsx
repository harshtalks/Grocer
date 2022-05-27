import { Box, Button, Input, Typography } from "@mui/material";
import React from "react";
import SelectCategory from "../smallComps/SelectCategory";

type inputBoxType = {
  placeholder: string;
  multiline: boolean;
  type: "text" | "number" | "password";
  label: string;
};

const InputBox = ({ placeholder, multiline, type, label }: inputBoxType) => {
  return (
    <Box sx={{ margin: "20px 0", width: "100%", color: "#34333A" }}>
      <Typography gutterBottom variant="body1">
        {label}
      </Typography>
      <Input
        multiline={multiline}
        minRows={5}
        maxRows={10}
        disableUnderline
        type={type}
        sx={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "2px solid #BDBDBD",
        }}
        fullWidth
        placeholder={placeholder}
      />
    </Box>
  );
};

type addNewItemType = {
  toggleAddNewItem: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddNewItem = ({ toggleAddNewItem }: addNewItemType) => {
  const cancelHandler = () => {
    toggleAddNewItem((el) => !el);
  };
  return (
    <Box sx={{ padding: "3rem" }}>
      <Typography variant="h5">Add New Item</Typography>
      <InputBox
        placeholder={"Enter a name"}
        type="text"
        multiline={false}
        label="Name"
      />
      <InputBox
        placeholder={"Enter a note"}
        type="text"
        multiline={true}
        label="Description (Optional)"
      />
      <InputBox
        placeholder={"Enter image link"}
        type="text"
        multiline={false}
        label="Link"
      />
      <Box sx={{ margin: "20px 0", width: "100%", color: "#34333A" }}>
        <Typography gutterBottom variant="body1">
          Select Category
        </Typography>
        <SelectCategory />
      </Box>
      <Box sx={{ marginTop: "2em" }}>
        <Button
          onClick={cancelHandler}
          color="secondary"
          size="small"
          sx={{ marginRight: "20px" }}
        >
          Cancel
        </Button>
        <Button size="large" variant="outlined">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default AddNewItem;
