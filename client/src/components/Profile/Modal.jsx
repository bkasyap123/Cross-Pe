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
import { Link } from "react-router-dom";
import { TbBorderRadius, TbMathGreater } from "react-icons/tb";
import Currency from "./Currency";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    padding: theme.spacing(2),
    maxWidth: "470px",
    color: "#fff",
    overflow: "hidden",
    backgroundColor: "#1D1E28",
    borderRadius: "16px",
    "@media (max-width: 500px)": {
      minWidth: "90vw",
    },
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Modal({ modal, setModal, flag, value }) {
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
          Add Currency
        </DialogTitle>
        <div className="border border-[#FFFFFF0D] mb-3"></div>
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
        <DialogContent
          dividers
          style={{ padding: "8px" }}
          className="m:flex flex-col max-sm:p-0"
        >
          <Typography gutterBottom>
            {value.map((v, idx) => (
              <Currency key={idx} value={v} />
            ))}
            <div className="border border-[#FFFFFF0D]"></div>
            <button className="bg-[#0000003D] text-sm text-[#5A60FF] w-full text-start py-3 px-5 my-5 rounded-lg font-semibold">
              + Request more Currency
            </button>
            <p className="text-[#FFFFFF66] text-sm max-sm:text-[10px]">
              Note that the “other currencies” will take sometime to get
              featured in our popular currency list due to some operational
              constraint. We will get back to you once it’s implemented
            </p>
          </Typography>
        </DialogContent>
        <DialogActions>
          <span>
            <button
              onClick={handleClose}
              className="mr-6 rounded-xl bg-[#FFFFFF0D] p-4 max-sm:py-3"
            >
              Cancel
            </button>
            <button className="bg-[#343BFF] rounded-xl py-4 px-6 max-sm:py-3 max-sm:px-5">
              Add
            </button>
          </span>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}
