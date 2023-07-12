import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Select, MenuItem } from "@mui/material";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Autocomplete from "@mui/material/Autocomplete";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function MyProfile() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    {
      value: "What is your favorite color ?",
      label: "What is your favorite color ?",
    },
    {
      value: "What is the name of your first beach visited ?",
      label: "What is the name of your first beach visited ?",
    },
    {
      value: "What is your mother maiden Name ?",
      label: "What is your mother maiden Name ?",
    },
    {
      value: "What is your favorite movie ?",
      label: "What is your favorite movie ?",
    },
    {
      value: "What street did you grow up on ?",
      label: "What street did you grow up on ?",
    },
    {
      value: "What is the name of the place your wedding reception was held ?",
      label: "What is the name of the place your wedding reception was held ?",
    },
    {
      value: "What is the name of the first beach you visited ?",
      label: "What is the name of the first beach you visited ?",
    },
    {
      value: "In what city or town did you meet your spouse/partner ?",
      label: "In what city or town did you meet your spouse/partner ?",
    },
    {
      value: "What was the make and model of your first car ?",
      label: "What was the make and model of your first car ?",
    },
    {
      value: "In what city or town does your nearest sibling live ?",
      label: "In what city or town does your nearest sibling live ?",
    },
    {
      value:
        "What was the name of your first stuffed animal or doll or action figure ?",
      label:
        "What was the name of your first stuffed animal or doll or action figure ?",
    },
    {
      value: "What was your favorite place to visit as a child ?",
      label: "What was your favorite place to visit as a child ?",
    },
    {
      value: "What is the country of your ultimate dream vacation ?",
      label: "What is the country of your ultimate dream vacation ?",
    },
    {
      value: "What is the name of your favorite childhood teacher ?",
      label: "What is the name of your favorite childhood teacher ?",
    },
  ];
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
            aria-current="page"
            to="/users/myprofile"
          >
            My Profile
          </Link>
        </Breadcrumbs>
      </div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Personal Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="First Name"  required  
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField
                    id="lastName"
                    name="lastName"
                    size="small"
                    label="Last Name"  required  
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField
                    id="displayName"
                    name="displayName"
                    label="Display Name" required  
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField
                    id="email"
                    name="email"
                    label="Email ID" required
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "10px" }}
                >
                  <TextField
                    id="workNumber"
                    name="workNumber"
                    label="Work Number" required
                    size="small"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <div style={{ float: "right" }}>
              <button
                className="btn btn-outline-danger btn-sm"
                style={{ margin: "10px" }}
              >
                Save
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                style={{ margin: "10px" }}
              >
                Cancel
              </button>
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Credentials</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
                <FormControl variant="standard" sx={{ width: 500 }}>
                  <TextField
                    id="oldPassword"
                    name="oldPassword"
                    size="small"
                    label="Old Password" required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ width: 500 }}>
                  <TextField
                    id="newPassword"
                    name="newPassword"
                    size="small"
                    label="New Password" required
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  variant="standard"
                  sx={{ width: 500, marginTop: "20px" }}
                >
                  <TextField
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                    size="small"
                    label="Confirm New Password" required
                  />
                </FormControl>
              </Grid>
            </Grid>
            <div style={{ float: "right" }}>
              <button
                className="btn btn-outline-danger btn-sm"
                style={{ margin: "10px" }}
              >
                Save
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                style={{ margin: "10px" }}
              >
                Cancel
              </button>
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Security Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
                <FormControl size="small" sx={{ width: 500, m: 1 }}>
                  <Autocomplete
                    disablePortal
                    Select
                    labelId="securityQ1"
                    id="security1_question"
                    size="small"
                    options={options}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="securityQ1"
                        label="Question Number 1" required
                      />
                    )}
                  />
                </FormControl>

                <FormControl variant="standard" sx={{ width: 500, m: 1 }}>
                  <TextField
                    label="Answer"
                    id="security1_answer"
                    size="small"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl size="small" sx={{ width: 500, m: 1 }}>
                  <Autocomplete
                    disablePortal
                    Select
                    labelId="securityQ2"
                    id="security2_question"
                    size="small"
                    options={options}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="securityQ2"
                        label="Question Number 2" required
                      />
                    )}
                  />
                </FormControl>

                <FormControl variant="standard" sx={{ width: 500, m: 1 }}>
                  <TextField
                    label="Answer"
                    id="security2_answer"
                    size="small"
                  />
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl size="small" sx={{ width: 500, m: 1 }}>
                  <Autocomplete
                    disablePortal
                    Select
                    labelId="securityQ3"
                    id="security3_question"
                    size="small"
                    options={options}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        id="securityQ3"
                        label="Question Number 3" required
                      />
                    )}
                  />
                </FormControl>

                <FormControl variant="standard" sx={{ width: 500, m: 1 }}>
                  <TextField
                    label="Answer" 
                    id="security3_answer"
                    size="small"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <div style={{ float: "right" }}>
              <button
                className="btn btn-outline-danger btn-sm"
                style={{ margin: "10px" }}
              >
                Save
              </button>
              <button
                className="btn btn-outline-danger btn-sm"
                style={{ margin: "10px" }}
              >
                Cancel
              </button>
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}