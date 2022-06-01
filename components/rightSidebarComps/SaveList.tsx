import { Box, Button, Input } from "@mui/material";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { setName } from "../../app/listReducer";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { useGetMediaQueryMatches } from "../../hooks/useGetMediaQueryMatches";

function SnackBar({ open, setOpen }: snackType) {
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
        message="List Saved"
        action={action}
      />
    </div>
  );
}

const SaveList = () => {
  const { isSmall, isSmallest, isMedium } = useGetMediaQueryMatches();
  const [name, toggleName] = React.useState("");
  const dispatch = useAppDispatch();

  // snackbar
  const [open, setOpen] = React.useState(false);

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
        <Button
          size={isSmall ? "small" : "large"}
          sx={{
            padding: isSmall ? "14px 10px" : "14px 30px",
            fontWeight: "bold",
          }}
          onClick={() => {
            dispatch(setName(name));
            handleClick();
          }}
        >
          Save
        </Button>
      </Box>
      <SnackBar open={open} setOpen={setOpen} />
    </Box>
  );
};

interface snackType {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default SaveList;
