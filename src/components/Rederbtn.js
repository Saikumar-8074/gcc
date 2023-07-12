import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

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

const Rederbtn = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deactivateOpen, setDeactivateOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleClickEditOpen = () => {
    setEditOpen(true);
  };
  const handleDeactivateClickOpen = () => {
    setDeactivateOpen(true);
  };
  const handleDeleteClickOpen = () => {
    setDeleteOpen(true);
  };

  const handleClickEditClose = () => {
    setEditOpen(false);
  };
  const handleDeactivateClickclose = () => {
    setDeactivateOpen(false);
  };
  const handleDeleteClickclose = () => {
    setDeleteOpen(false);
  };
  return (
    <span>
      <>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => handleClickEditOpen()}
        >
          Edit
        </button>
        <BootstrapDialog
          onClose={handleClickEditClose}
          aria-labelledby="alert-dialog-title1"
          aria-describedby="alert-dialog-description1"
          fullWidth={true}
          maxWidth={"xs"}
          open={editOpen}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleClickEditClose}
          >
            Edit Status
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>Do you want to edit status</Typography>
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleClickEditClose}
              autoFocus
            >
              {" "}
              Ok{" "}
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleClickEditClose}
            >
              Cancle
            </button>
          </DialogActions>
        </BootstrapDialog>
      </>
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
            Deactivate Status
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Do you want to deactivate status
            </Typography>
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleDeactivateClickclose}
              autoFocus
            >
              {" "}
              Ok{" "}
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleDeactivateClickclose}
            >
              Cancle
            </button>
          </DialogActions>
        </BootstrapDialog>
      </>
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
          onClick={() => handleDeleteClickOpen()}
        >
          Delete
        </button>
        <BootstrapDialog
          onClose={handleDeleteClickclose}
          aria-labelledby="alert-dialog-title3"
          aria-describedby="alert-dialog-description3"
          fullWidth={true}
          maxWidth={"xs"}
          open={deleteOpen}
        >
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={handleDeleteClickclose}
          >
            Delete Status
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>Do you want to delete status</Typography>
          </DialogContent>
          <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleDeleteClickclose}
              autoFocus
            >
              {" "}
              Ok{" "}
            </button>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={handleDeleteClickclose}
            >
              Cancle
            </button>
          </DialogActions>
        </BootstrapDialog>
      </>
    </span>
  );
};
export default Rederbtn;
