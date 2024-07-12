import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
import { ReactComponent as StoreLogo } from "../../Assets/Logo.svg";
import { globalColors, globalFonts } from "../../StylesSource/styles";
import { Link } from "react-router-dom";

const logoContainerStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
export default function Login() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ mr: 2, backgroundColor: globalColors.red }}
      >
        Log in
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}

        // PaperProps={{
        //   component: 'form',
        //   onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries((formData as any).entries());
        //     const email = formJson.email;
        //     console.log(email);
        //     handleClose();
        //   },
        // }}
      >
        <Box
          sx={{
            ...logoContainerStyles,
          }}
        >
          <StoreLogo width={75} height={75} />
          <Typography
            variant="body1"
            sx={{ fontFamily: globalFonts.body, color: globalColors.black }}
          >
            Where Sneakers come alive
          </Typography>
        </Box>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Continue shopping on Fika, you need to log in.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />
          <Link to="/shop" style={{ color: globalColors.black }}>
            <Typography variant="caption" align="right">
              Forgot password?
            </Typography>
          </Link>
          <br />

          <Typography variant="caption">
            Don't have an account?
            <Link to="/register" style={{ color: globalColors.black }}>
              <Typography variant="caption" align="right">
                <b>Register</b>
              </Typography>
            </Link>
          </Typography>
        </DialogContent>
        <DialogActions
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            sx={{ mr: 2, backgroundColor: globalColors.red }}
          >
            Log in
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
