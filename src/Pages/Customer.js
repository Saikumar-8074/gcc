// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { Link } from "react-router-dom";
// import Breadcrumbs from "@mui/material/Breadcrumbs";
// import SearchIcon from "@mui/icons-material/Search";
// import TextField from "@mui/material/TextField";
// import { useState } from "react";

// const columns = [
//   { id: "companyName", label: "Company Name", minWidth: 170 },
//   { id: "description", label: "description", minWidth: 120 },
//   {
//     id: "createdDate",
//     label: "Created Date",
//     minWidth: 160,
//     align: "right",
//   },
//   {
//     id: "createdBy",
//     label: "Created By",
//     minWidth: 140,
//     align: "right",
//   },
//   {
//     id: "action",
//     label: "Action",
//     minWidth: 170,
//     align: "right",
//   },
// ];

// function createData(companyName, description, createdDate, createdBy, action) {
//   return {
//     companyName,
//     description,
//     createdDate,
//     createdBy,
//     action,
//   };
// }

// const rows = [
//   createData(
//     "ABC Health",
//     "ABC Health",
//     "12/07/2022",
//     "Admin",
//     <button className="btn btn-outline-success btn-sm">Update</button>
//   ),
//   createData(
//     "AIG Health",
//     "GASTO",
//     "08/05/2022",
//     "Admin",
//     <button className="btn btn-outline-success btn-sm">Update</button>
//   ),
//   createData(
//     "CognitiveHealthIT",
//     "CognitiveHealthIT",
//     "12/09/2002",
//     "Admin",
//     <button className="btn btn-outline-success btn-sm">Update</button>
//   ),
//   createData(
//     "Innoclique",
//     "AI Automation",
//     "02/07/2012",
//     "Admin",
//     <button className="btn btn-outline-success btn-sm">Update</button>
//   ),
//   createData(
//     "Mercy",
//     "Mercy",
//     "01/12/2019",
//     "Admin",
//     <button className="btn btn-outline-success btn-sm">Update</button>
//   ),
//   createData(
//     "MindPath",
//     "Revenue cycle management",
//     "03/04/2010",
//     "Admin",
//     <button className="btn btn-outline-success btn-sm">Update</button>
//   ),
//   createData(
//     "Quality",
//     "Census",
//     "04/06/2008",
//     "Admin",
//     <button className="btn btn-outline-success btn-sm">Update</button>
//   ),
//   createData(
//     "WellStreet",
//     "WellStreet",
//     "30/05/2023",
//     "Admin",
//     <button className="btn btn-outline-success btn-sm">Update</button>
//   ),

//   createData(
//     "Apple",
//     "Apple",
//     "02/08/2021",
//     "Admin",
//     <button className="btn btn-outline-success btn-sm">Update</button>
//   ),
//   createData(
//     "Banner",
//     "Banner",
//     "21/12/2021",
//     "Admin",
//     <button className="btn btn-outline-success btn-sm">Update</button>
//   ),
//   createData(
//     "Gemini",
//     "Gemini",
//     "21/08/2011",
//     "Admin",
//     <button className="btn btn-outline-success btn-sm">Update</button>
//   ),
// ];

// export default function CustomerList() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(8);
//   const [searchText, setSearchText] = useState("");

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   const handleSearchChange = (event) => {
//     setSearchText(event.target.value);
//   };

//   return (
//     <>
//       <div style={{ display: "flex", justifyContent: "space-between" }}>
//         <div role="presentation">
//           <Breadcrumbs
//             aria-label="breadcrumb"
//             separator="›"
//             sx={{ fontSize: "15px", fontWeight: "bold" }}
//           >
//             <Link
//               style={{ textDecoration: "none", color: "#9370DB" }}
//               to="/users"
//             >
//               Home
//             </Link>
//             <Link
//               color="primary"
//               style={{ textDecoration: "none" }}
//               aria-current="page"
//               to="/users/customer"
//             >
//               Customer List
//             </Link>
//           </Breadcrumbs>
//         </div>
//         <div style={{ float: "right", marginBottom: "30px" }}>
//           <TextField
//             label="Search"
//             value={searchText}
//             onChange={handleSearchChange}
//             variant="outlined"
//             size="small"
//             InputProps={{
//               startAdornment: (
//                 <endAdornment>
//                   <SearchIcon />
//                 </endAdornment>
//               ),
//             }}
//           />
//           <Link to="/users/createcustomer" style={{ marginLeft: "10px" }}>
//             <button className="btn btn-outline-danger ">Create Customer</button>
//           </Link>
//         </div>
//       </div>

//       <Paper sx={{ width: "100%", overflow: "hidden" }}>
//         <TableContainer sx={{ maxHeight: 440 }}>
//           <Table stickyHeader aria-label="sticky table">
//             <TableHead>
//               <TableRow>
//                 {columns.map((column) => (
//                   <TableCell
//                     key={column.id}
//                     align={column.align}
//                     sx={{ py: 2 }}
//                     style={{
//                       minWidth: column.minWidth,
//                       backgroundColor: "#f9f9f9",
//                     }}
//                   >
//                     <strong>{column.label}</strong>
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row) => {
//                   return (
//                     <TableRow
//                       hover
//                       role="checkbox"
//                       tabIndex={-1}
//                       key={row.code}
//                     >
//                       {columns.map((column) => {
//                         const value = row[column.id];
//                         return (
//                           <TableCell
//                             key={column.id}
//                             align={column.align}
//                             sx={{ py: 0.5 }}
//                           >
//                             {column.format && typeof value === "number"
//                               ? column.format(value)
//                               : value}
//                           </TableCell>
//                         );
//                       })}
//                     </TableRow>
//                   );
//                 })}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 100]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </>
//   );
// }
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
import CustomerDeactivate from "../components/CustomerDeactivate";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const columns = [
  { id: "companyName", label: "Company Name", minWidth: 170 },
  { id: "description", label: "Description", minWidth: 120 },
  {
    id: "createdDate",
    label: "Created Date",
    minWidth: 160,
    align: "center",
  },
  {
    id: "createdBy",
    label: "Created By",
    minWidth: 140,
    align: "center",
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "center",
  },
];

function createData(companyName, description, createdDate, createdBy, action) {
  return {
    companyName,
    description,
    createdDate,
    createdBy,
    action,
  };
}

const rows = [
  createData(
    "ABC Health",
    "ABC Health",
    "12/07/2022",
    "Admin",
    <CustomerDeactivate />
  ),
  createData(
    "AIG Health",
    "GASTO",
    "08/05/2022",
    "Admin",
    <CustomerDeactivate />
  ),
  createData(
    "CognitiveHealthIT",
    "CognitiveHealthIT",
    "12/09/2002",
    "Admin",
    <CustomerDeactivate />
  ),
  createData(
    "Innoclique",
    "AI Automation",
    "02/07/2012",
    "Admin",
    <CustomerDeactivate />
  ),
  createData("Mercy", "Mercy", "01/12/2019", "Admin", <CustomerDeactivate />),
  createData(
    "MindPath",
    "Revenue cycle management",
    "03/04/2010",
    "Admin",
    <CustomerDeactivate />
  ),
  createData(
    "Quality",
    "Census",
    "04/06/2008",
    "Admin",
    <CustomerDeactivate />
  ),
  createData(
    "WellStreet",
    "WellStreet",
    "30/05/2023",
    "Admin",
    <CustomerDeactivate />
  ),

  createData("Apple", "Apple", "02/08/2021", "Admin", <CustomerDeactivate />),
  createData("Banner", "Banner", "21/12/2021", "Admin", <CustomerDeactivate />),
  createData("Gemini", "Gemini", "21/08/2011", "Admin", <CustomerDeactivate />),
];

export default function Customer() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [searchText, setSearchText] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
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
              to="/users/customer"
            >
              Customer List
            </Link>
          </Breadcrumbs>
        </div>
        <div style={{ float: "right", marginBottom: "30px" }}>
          <TextField
            label="Search"
            value={searchText}
            onChange={handleSearchChange}
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <endAdornment>
                  <SearchIcon />
                </endAdornment>
              ),
            }}
          />
          <Link to="/users/createcustomer" style={{ marginLeft: "10px" }}>
            <button className="btn btn-outline-danger ">Create Customer</button>
          </Link>
        </div>
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    sx={{ py: 2 }}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#f9f9f9",
                    }}
                  >
                    <strong>{column.label}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            sx={{ py: 0.5 }}
                          >
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className="css-16c50h-MuiInputBase-root-MuiTablePagination-select css-levciy-MuiTablePagination-displayedRows  "
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}
