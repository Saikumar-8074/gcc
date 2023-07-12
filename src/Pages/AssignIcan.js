import React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

const AssignIcan = () => {
  return (
    <>
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
            aria-current="page"
            to="/users/assign_ican"
          >
            Assign ICAN
          </Link>
        </Breadcrumbs>
      </div>
      <div>
        <h1>Assign Ican</h1>
      </div>
    </>
  );
};

export default AssignIcan;
