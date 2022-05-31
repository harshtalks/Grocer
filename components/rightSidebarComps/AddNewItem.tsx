import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Input,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import Fetcher from "../../lib/fetcher";
import SelectCategory from "../smallComps/SelectCategory";

// Types for the TypeScript
type inputBoxType = {
  placeholder: string;
  multiline: boolean;
  type: "text" | "number" | "password";
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  warningLabel: React.Dispatch<React.SetStateAction<boolean>>;
};

//
type addNewItemType = {
  toggleAddNewItem: React.Dispatch<React.SetStateAction<boolean>>;
};

// Input Box Element

const InputBox = ({
  placeholder,
  multiline,
  type,
  label,
  value,
  setValue,
  warningLabel,
}: inputBoxType) => {
  return (
    <Box sx={{ margin: "20px 0", width: "100%", color: "#34333A" }}>
      <Typography gutterBottom variant="body1">
        {label}
      </Typography>
      <Input
        multiline={multiline}
        minRows={5}
        maxRows={10}
        value={value}
        onChange={(e) => {
          warningLabel(false);
          setValue(e.target.value);
        }}
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

// Main JSX ELEMENT

const AddNewItem = ({ toggleAddNewItem }: addNewItemType) => {
  // hooks for the fields
  const [category, setCategory] = React.useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const { isSmall, isSmallest } = useGetMediaQueryMatches();

  // UI Hooks
  const [isLoading, setIsLoading] = useState(false);
  const [warningContent, setWarningContent] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const clearFields = () => {
    setName("");
    setDescription("");
    setImageLink("");
    setCategory("");
  };

  // handlers
  const cancelHandler = () => {
    toggleAddNewItem((el) => !el);
  };

  const submitHandler = async () => {
    if (!name || !description || !imageLink || !category) {
      setWarningContent("All fields are mandatory.");
      setShowWarning(true);
      return;
    }

    setWarningContent("");
    setIsLoading(true);

    try {
      const result = await Fetcher("/addItem", {
        name: name,
        description: description,
        imageLink: imageLink,
        categoryId: +category,
      });

      if (result.error) {
        throw new Error(result.error);
      }

      // close the "Add New Item" panel
      cancelHandler();
    } catch (e: any) {
      console.error(e);
      setShowWarning(true);
      setWarningContent(e.message);
    }
    setIsLoading(false);
    clearFields();
  };

  // returning the JSX Element
  return (
    <Box
      sx={{
        padding: isSmall ? "1rem" : "3rem",
        margin: isSmall ? "10px" : "none",
        border: isSmall ? "4px solid #56CCF2" : "none",
        borderRadius: isSmall ? "10px" : "none",
        overflow: "auto",
        background: "white",
        height: "95vh",
      }}
    >
      <Typography gutterBottom variant="h5">
        Add New Item
      </Typography>
      {showWarning && <Alert severity="error">{warningContent}</Alert>}
      <InputBox
        warningLabel={setShowWarning}
        value={name}
        setValue={setName}
        placeholder={"Enter a name"}
        type="text"
        multiline={false}
        label="Name"
      />
      <InputBox
        warningLabel={setShowWarning}
        value={description}
        setValue={setDescription}
        placeholder={"Enter a note"}
        type="text"
        multiline={true}
        label="Description (Optional)"
      />
      <InputBox
        warningLabel={setShowWarning}
        value={imageLink}
        setValue={setImageLink}
        placeholder={"Enter image link"}
        type="text"
        multiline={false}
        label="Link"
      />
      <Box sx={{ margin: "20px 0", width: "100%", color: "#34333A" }}>
        <Typography gutterBottom variant="body1">
          Select Category
        </Typography>
        <SelectCategory category={category} setCategory={setCategory} />
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
        {isLoading ? (
          <CircularProgress />
        ) : (
          <Button
            disabled={category ? false : true}
            onClick={submitHandler}
            size="large"
            variant="outlined"
          >
            Save
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default AddNewItem;
