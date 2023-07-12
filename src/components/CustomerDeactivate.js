import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { Apple } from "@mui/icons-material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const CustomerDeactivate = () => {
  const [open, setOpen] = useState(false);
  const [deactivateOpen, setDeactivateOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDeactivateClickOpen = () => {
    setDeactivateOpen(true);
  };

  const handleDeactivateClickclose = () => {
    setDeactivateOpen(false);
  };
  return (
    <span>
      <Link to="/users/createcustomer">
        <button className="btn btn-outline-danger btn-sm">Update</button>
      </Link>
      <span
        style={{
          borderLeft: "2px solid gray",
          padding: "7px",
          marginLeft: "12px",
        }}
      ></span>
      <>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => handleDeactivateClickOpen()}
        >
          Deactivate
        </button>
        <BootstrapDialog
          onClose={handleDeactivateClickclose}
          aria-labelledby="alert-dialog-title2"
          aria-describedby="alert-dialog-description2"
          fullWidth={true}
          maxWidth={"xs"}
          open={deactivateOpen}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleDeactivateClickclose}
          >
            Deactivate Customer
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Do you want to deactivate Customer?
            </Typography>
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleDeactivateClickclose}
              autoFocus
            >
              {" "}
              OK{" "}
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleDeactivateClickclose}
            >
              CANCEL
            </button>
          </DialogActions>
        </BootstrapDialog>
      </>
    </span>
  );
};
export default CustomerDeactivate;
