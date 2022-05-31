import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { CircularProgress, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useGetUser from "../../hooks/useGetUser";
import { format } from "date-fns";
import { isErrored } from "stream";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Account() {
  const [open, setOpen] = React.useState(false);
  const { user, isLoading, isError } = useGetUser();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Switch checked={open} onClick={handleClickOpen} />
      <Dialog
        sx={{ padding: "2rem" }}
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"User Account"}</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {isLoading ? (
            <CircularProgress />
          ) : (
            <>
              {isError ? (
                <Typography>{isError.info.error}</Typography>
              ) : (
                user && (
                  <>
                    <Typography variant="h6">{user.name}</Typography>
                    <Typography variant="body1">
                      Joined on:{" "}
                      {user.createdAt &&
                        format(new Date(user.createdAt), "MMM dd, yyyy")}
                    </Typography>
                    <Typography>Email: {user.email}</Typography>
                  </>
                )
              )}
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
