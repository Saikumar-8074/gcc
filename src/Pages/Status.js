import "../Pages/Status.css";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Select, MenuItem } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Autocomplete from "@mui/material/Autocomplete";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Rederbtn from "../components/Rederbtn";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;



const columns = [
  {
    id: "title",
    label: "Title",
    align: "center",
    // minWidth: 170
  },
  {
    id: "fromDate",
    label: "From Date",
    align: "center",
  },
  {
    id: "toDate",
    label: "To Date",
    align: "center",
  },
  {
    id: "audience",
    label: "Audience",
    align: "center",
  },
  {
    id: "description",
    label: "Description",
    align: "center",
    // format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    // minWidth: 170,
    align: "center",
    // format: (value) => value.toFixed(2),
  },
];

function createData(title, fromDate, toDate, audience, description, action) {
  return { title, fromDate, toDate, audience, description, action };
}

const rows = [
  createData(
    "abc",
    "06/02/2020",
    "20/07/2021",
    "Mindpath-cashManagement",
    "loremcsdccxc",
    <Rederbtn />
  ),
  createData(
    "xyz",
    "06/02/2019",
    "20/07/2020",
    "Mercy-Denials",
    "loremcsdccxc",
    <Rederbtn />
  ),
  createData(
    "abc",
    "06/02/2019",
    "20/04/2020",
    "Yale-CashPosting",
    "loremcsdccxc",
         <Rederbtn />
  ),
];

export default function Status() {
  const [selectedValue, setSelectedValue] = useState("");
  const [description, setDescription] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const options = [
    { value: "Mindpath-cashManagement", label: "Mindpath-cashManagement" },
    { value: "Innclique-eyt", label: "Innclique-eyt" },
    // Rest of the options...
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredRows = searchText
    ? rows.filter((row) =>
        row.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : rows;

  return (
    <div>
      <div role="presentation" style={{ margin: "20px" }}>
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
            to="/users/status"
          >
            Add Status
          </Link>
        </Breadcrumbs>
      </div>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        Validate
        autoComplete="on"
      >
        <Grid container>
          <Grid item xs={6}>
            <Grid item>
              <FormControl
                variant="standard"
                sx={{ width: 500, marginTop: "10px" }}
              >
                <TextField
                  id="title"
                  name="title"
                  size="small"
                  label="Title"
                  required
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                size="small"
                sx={{ width: 500 }}
                style={{ marginTop: "20px" }}
              >
                <Autocomplete
                  disablePortal
                  Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  disableCloseOnSelect
                  getOptionLabel={(option) => option.label}
                  size="small"
                  options={options}
                  renderOption={(props, option, { selected }) => (
                    <li {...props}>
                      <Checkbox
                        icon={icon}
                        checkedIcon={checkedIcon}
                        style={{ marginRight: 8 }}
                        checked={selected}
                      />
                      {option.label}
                    </li>
                  )}
                  renderInput={(params) => (
                    <TextField {...params} label="Audience" />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl
                variant="standard"
                sx={{ width: 500, marginTop: "20px", height: "20px" }}
              >
                <TextField
                  label="Description"
                  required
                  multiline
                  rows={1}
                  // value={description}
                  onChange={(event) =>
                    setSelectedValue(event.target.value)
                  }
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item>
              <FormControl size="small" sx={{ width: 500 }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateRangePicker"]}>
                    <DemoItem component="DateRangePicker">
                      <DateRangePicker
                        slotProps={{ textField: { size: "small" } }}
                        localeText={{ start: "From Date", end: "To Date" }}
                      />
                    </DemoItem>
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>

        <div style={{ float: "right" }}>
          <Grid container spacing={2} alignItems="center" />
          <Grid item>
            <Grid item sx={{ margin: "20px" }}>
              <div style={{ float: "right", marginBottom: "30px" }}>
                <TextField
                  label="Search"
                  value={searchText}
                  onChange={handleSearchChange}
                  variant="outlined"
                  size="small"
                  sx={{ marginRight: "10px" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        <IconButton>
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <button
                  className="btn btn-outline-danger"
                  style={{ marginRight: "10px" }}
                >
                  Save
                </button>
                <button className="btn btn-outline-danger">Cancel</button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>

      <Box>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow sx={{ alignItems: "center" }}>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "rgb(249,249,249)",
                        alignItems: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {filteredRows.length > 0 ? (
                  filteredRows
                    .slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                          sx={{ alignItems: "center" }}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                key={column.id}
                                align={column.align}
                              >
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      No data to display
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15, 20, 25, 50, 100]}
            sx={{ display: "flex", justifyContent: "space-between" }}
            component="div"
            count={filteredRows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
}