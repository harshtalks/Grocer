import { Box, Button, Input } from "@mui/material";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import LoadingButton from "@mui/lab/LoadingButton";
import { clearEverything, setName } from "../../app/listReducer";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";
import Fetcher from "../../lib/fetcher";

function SnackBar({ open, setOpen, content }: snackType) {
  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={content}
        action={action}
      />
    </div>
  );
}

const SaveList = () => {
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  const [name, toggleName] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const dispatch = useAppDispatch();
  const [snackBarContent, setSnackBarContent] = React.useState("");
  const itemLists = useAppSelector((state) => state.lists);

  // snackbar
  const [open, setOpen] = React.useState(false);

  const submitHandler = async () => {
    dispatch(setName(name));
    setIsLoading(true);
    // try and catch

    try {
      const result = await Fetcher("/addShoppingList", {
        name: name,
        items: itemLists.items,
      });

      if (result.error) {
        throw new Error(result.error);
      }

      //clearing Fields
      dispatch(clearEverything());
      setIsLoading(false);
      setOpen(true);
      setName("");
      setSnackBarContent("List is Saved");
    } catch (e: any) {
      setIsLoading(false);
      setSnackBarContent(e.error);
    }
  };

  const handleClick = () => {
    setOpen(true);
  };
  return (
    <Box
      sx={{
        height: "20%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: isSmall ? "inherit" : "white",
        flexWrap: "nowrap",
        padding: isSmall ? "0 10px" : "0",
      }}
    >
      <Box
        sx={{
          border: "1px solid #F9A109",
          borderRadius: "10px",
        }}
      >
        <Input
          placeholder="Add Name"
          fullWidth={false}
          sx={{ padding: isSmall ? "10px 5px" : "10px" }}
          disableUnderline
          value={name}
          onChange={(e) => toggleName(e.target.value)}
        />
        <LoadingButton
          loading={isLoading}
          loadingPosition="start"
          startIcon={<SaveAsOutlinedIcon />}
          disabled={itemLists.items.length === 0 || name === ""}
          size={isSmall ? "small" : "large"}
          sx={{
            padding: isSmall ? "14px 10px" : "14px 30px",
            fontWeight: "bold",
          }}
          onClick={submitHandler}
        >
          Save
        </LoadingButton>
      </Box>
      <SnackBar open={open} setOpen={setOpen} content={snackBarContent} />
    </Box>
  );
};

interface snackType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  content: string;
}

export default SaveList;
