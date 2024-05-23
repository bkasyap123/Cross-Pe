import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Flag from "react-world-flags";
import { TbMathGreater } from "react-icons/tb";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Modal({ modal, setModal, flag }) {
  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        aria-hidden="true"
        open={modal}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Complete Verification
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Please complete the KYC to get your international account in just 2
            minutes.
          </Typography>
        </DialogContent>
        <DialogActions>
          <button
            onClick={handleClose}
            className="bg-blue-500 text-center py-2 px-4 rounded-md text-white mx-auto"
          >
            Complete KYC
          </button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
