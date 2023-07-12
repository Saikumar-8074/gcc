import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import PermanentDrawer from "./PermenentDrawer";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../Pages/UserList.css";
import { InputAdornment } from "@mui/material";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(3),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiPaper-root": {
    width: "500px", // Increase the width of the modal
    maxWidth: "100%",
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

const tableData = [
  {
    id: 1,
    userName: "susan",
    customerName: "Suraj",
    displayName: 30,
    createdDate: "Gujrat",
    lastLogin: "98-09-99",
    className: "MuiTableCell-root",
  },
  {
    id: 2,
    userName: "Raj",
    customerName: "Raj",
    displayName: 30,
    createdDate: "Gujrat",
    lastLogin: "98-09-99",
    className: "MuiTableCell-root",
  },
  {
    id: 3,
    userName: "Shekar",
    customerName: "Suraj",
    displayName: 30,
    createdDate: "Gujrat",
    lastLogin: "98-09-99",
    className: "MuiTableCell-root",
  },
  {
    id: 4,
    userName: "Sai",
    customerName: "Suraj",
    displayName: 30,
    createdDate: "Gujrat",
    lastLogin: "98-09-99",
    className: "MuiTableCell-root",
  },
  {
    id: 5,
    userName: "susan",
    customerName: "Suraj",
    displayName: 30,
    createdDate: "Gujrat",
    lastLogin: "98-09-99",
    className: "MuiTableCell-root",
  },
  {
    id: 6,
    userName: "susan",
    customerName: "Suraj",
    displayName: 30,
    createdDate: "Gujrat",
    lastLogin: "98-09-99",
    className: "MuiTableCell-root",
  },
  // Add more objects as needed
];

export default function UserList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchText, setSearchText] = useState("");
  const [selectedUserName, setSelectedUserName] = useState("");
  const [selectedUnlockUserName, setSelectedUnlockUserName] = useState("");
  const [open, setOpen] = React.useState(false);
  const [openUnlock, setOpenUnlock] = useState(false);

  const handleOpen = (userName) => {
    setSelectedUserName(userName);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleUnlockOpen = (userName) => {
    setSelectedUnlockUserName(userName);
    setOpenUnlock(true);
  };
  const handleCloseUnlock = () => {
    setOpenUnlock(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div role="presentation">
          <Breadcrumbs
            aria-label="breadcrumb"
            separator="›"
            sx={{ fontSize: "15px", fontWeight: "bold" }}
          >
            <Link
              style={{ textDecoration: "none", color: "#9370DB" }}
              to="/users"
            >
              Home
            </Link>
            <Link
              color="primary"
              style={{ textDecoration: "none" }}
              aria-current="page"
              to="/users/listuser"
            >
              UserList
            </Link>
          </Breadcrumbs>
        </div>
        <div style={{ float: "right", marginBottom: "30px" }}>
          <>
            <div>
              <TextField
                label="Search"
                value={searchText}
                variant="outlined"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {/* <SearchOutlinedIcon /> */}
                    </InputAdornment>
                  ),
                }}
              />
              <Link
                to="/users/createuser"
                style={{ marginRight: "70px", marginLeft: "10px" }}
              >
                <button className="btn btn-outline-danger ">Create User</button>
              </Link>
            </div>
          </>
        </div>
      </div>
      <Paper style={{ width: "100%", overflow: "hidden" }}>
        <TableContainer style={{ maxHeight: "440px"  }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead className="table-head">
              <TableRow>
                <TableCell className="table-header-cell" width='5%'>UserName</TableCell>
                <TableCell className="table-header-cell" width='5%'>
                  CustomerName
                </TableCell>
                <TableCell className="table-header-cell" width='5%'>DisplayName</TableCell>
                <TableCell className="table-header-cell"  width='5%'>CreatedDate</TableCell>
                <TableCell className="table-header-cell"  width='5%'>LastLogin</TableCell>
                <TableCell className="table-header-cell"  width='8%'>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="MuiTableCell-root">
                    {row.userName}
                  </TableCell>
                  <TableCell className="MuiTableCell-root">
                    {row.customerName}
                  </TableCell>
                  <TableCell className="MuiTableCell-root">
                    {row.displayName}
                  </TableCell>
                  <TableCell className="MuiTableCell-root">
                    {row.createdDate}
                  </TableCell>
                  <TableCell className="MuiTableCell-root">
                    {row.lastLogin}
                  </TableCell>
                  <TableCell>
                    <div>
                      <Link to="/users/createuser">
                        <button className="btn btn-outline-danger btn-sm">
                          Update
                        </button>
                      </Link>

                      <span style={{ borderLeft: "2px solid gray", padding: "7px", marginLeft: "12px" }}></span>
                      <button
                        onClick={() => handleOpen(row.userName)}
                        className="btn btn-outline-danger btn-sm me-1"
                      >
                        Deactivate
                      </button>
                      <BootstrapDialog
                        onClose={handleClose}
                        aria-labelledby="customized-dialog-title"
                        open={open}
                      >
                        <BootstrapDialogTitle
                          id="customized-dialog-title"
                          onClose={handleClose}
                          style={{ color: "#278bce" }}
                        >
                          <h5 style={{ fontFamily: "cursive" }}>
                            Deactivated User
                          </h5>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                          <Typography gutterBottom>
                            <h6 style={{ fontFamily: "cursive" }}>
                              Do you want to Deactivate the &nbsp;
                              <strong>{selectedUserName}</strong>
                            </h6>
                          </Typography>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            style={{
                              backgroundColor: "#f2880b",
                              color: "#fff",
                              fontFamily: "cursive",
                            }}
                            autoFocus
                            onClick={handleClose}
                          >
                            Cancel
                          </Button>
                          <Button
                            style={{
                              backgroundColor: "#f2880b",
                              color: "#fff",
                              fontFamily: "cursive",
                            }}
                            autoFocus
                            onClick={handleClose}
                          >
                            Save
                          </Button>
                        </DialogActions>
                      </BootstrapDialog>
                      <span
                        style={{
                          borderLeft: "2px solid gray",
                          padding: "7px",
                          marginLeft: "12px",
                        }}
                      ></span>
                      <button
                        onClick={() => handleUnlockOpen(row.userName)}
                        className="btn btn-outline-danger btn-sm me-2"
                      >
                        Unlock
                      </button>
                      <BootstrapDialog
                        onClose={handleCloseUnlock}
                        aria-labelledby="customized-dialog-title"
                        open={openUnlock}
                      >
                        <BootstrapDialogTitle
                          id="customized-dialog-title"
                          onClose={handleCloseUnlock}
                          style={{ color: "#278bce" }}
                        >
                          <h5 style={{ fontFamily: "cursive" }}>Unlock User</h5>
                        </BootstrapDialogTitle>
                        <DialogContent dividers>
                          <Typography gutterBottom>
                            <h6 style={{ fontFamily: "cursive" }}>
                              Do you want to Unlock the &nbsp;
                              <strong>{selectedUnlockUserName}</strong>
                            </h6>
                          </Typography>
                        </DialogContent>
                        <DialogActions>
                          <Button
                            style={{
                              backgroundColor: "#f2880b",
                              color: "#fff",
                              fontFamily: "cursive",
                            }}
                            autoFocus
                            onClick={handleCloseUnlock}
                          >
                            Cancel
                          </Button>
                          <Button
                            style={{
                              backgroundColor: "#f2880b",
                              color: "#fff",
                              fontFamily: "cursive",
                            }}
                            autoFocus
                            onClick={handleCloseUnlock}
                          >
                            Save
                          </Button>
                        </DialogActions>
                      </BootstrapDialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <TablePagination
          className="css-16c50h-MuiInputBase-root-MuiTablePagination-select css-levciy-MuiTablePagination-displayedRows  "
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <br />
      <PermanentDrawer />
    </>
  );
}