import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AddIcon from "@mui/icons-material/Add";
import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: "calc(-50% + 16px)",
//     right: "calc(50% + 16px)",
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: "#784af4",
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor:
//       theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(236,119,35) 0%, rgb(236,119,35) 50%, rgb(138,35,135) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      "linear-gradient( 136deg, rgb(236,119,35) 0%, rgb(236,119,35) 50%, rgb(138,35,135) 100%)",
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = ["User Creation", "User Roles"];

export default function CreateUser() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
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
            style={{ textDecoration: "none", color: "#9370DB" }}
            to="/users/listuser"
          >
            Users
          </Link>
          <Link
            color="primary"
            style={{ textDecoration: "none" }}
            aria-current="page"
            to="/users/createuser"
          >
            Create User
          </Link>
        </Breadcrumbs>
      </div>
      <Card
        sx={{
          width: "100%",
          marginLeft: "10px",
          marginTop: "35px",
          height: "45 0px",
          textAlign: "left",
        }}
      >
        <Stack sx={{ width: "auto"}} spacing={2}>
          <CardContent
            sx={{
              fontSize: 14,
              backgroundColor: "#f5f5f5",
              height: "auto",
            }}
            color="text.secondary"
            gutterBottom
          >
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<ColorlibConnector />}
              style={{ width: "60%", height: "70px", marginLeft: "-150px" }}
            >
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </CardContent>
          <div>
            {activeStep === 0 && <Step1Form />}
            {activeStep === 1 && <Step2Form />}
          </div>
          <Stack
            direction="row"
            spacing={2}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "50px",
            }}
          >
            <Button
              // disabled={activeStep === steps.length - 1}
              onClick={handleNext}
              variant="contained"
            >
              Save & Next
            </Button>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant="contained"
              style={{ marginRight: "150px" }}
            >
              Back
            </Button>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

const Step1Form = () => {
  //1 st form
  const [selectedUserType, setSelectedUserType] = useState(null);

  const handleUserTypeChange = (event, newValue) => {
    setSelectedUserType(newValue);
  };
  //
  return (
    <>
      <div className="mt-4 mx-3 d-flex">
        <Autocomplete
          disablePortal
          size="small"
          id="combo-box-demo"
          options={userTypes}
          sx={{ width: 300 }}
          value={selectedUserType}
          onChange={handleUserTypeChange}
          renderInput={(params) => (
            <TextField {...params} label="Select User Type" />
          )}
        />
        <Autocomplete
          disablePortal
          size="small"
          id="combo-box-demo"
          options={companyNames}
          sx={{ width: 300, marginLeft: "14px" }}
          renderInput={(params) => (
            <TextField {...params} label="Select Company" />
          )}
        />
        {selectedUserType?.label === "User" && (
          <Checkbox
            {...label}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 34, marginLeft: "7px" } }}
          />
        )}
        {selectedUserType?.label === "User" && (
          <span className="d-flex justify-content-center align-items-center">
            <strong>Is Admin User</strong>
          </span>
        )}
      </div>
      <Box
        className="mx-2 mt-2"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "33.5ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Middle Name"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          size="small"
        />
      </Box>
      <Box
        className="mx-2 mt-2"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "33.5ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Email Id"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          size="small"
        />
      </Box>
      <div className="mt-3 mx-3 d-flex">
        <Autocomplete
          id="country-select-demo"
          size="small"
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select country"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300, marginLeft: "14px" }}
          size="small"
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              <img
                loading="lazy"
                width="20"
                src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                alt=""
              />
              {option.label} ({option.code}) +{option.phone}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Select State"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
            />
          )}
        />
        <Box
          component="form"
          sx={{
            "& > :not(style)": { mx: 2, width: "33.5ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Email Id"
            variant="outlined"
            size="small"
          />
        </Box>
      </div>
    </>
  );
};
const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const userTypes = [{ label: "User" }, { label: "Admin" }];
const companyNames = [
  { label: "Innoclique " },
  { label: "Tek guru " },
  { label: "Cognitive " },
];

const Step2Form = () => {
  const [textFields, setTextFields] = useState([]);
  const handleAddField = () => {
    setTextFields([...textFields, { Product: "", Role: "" }]);
  };
  const handleInputChange = (index, field, value) => {
    const updatedTextFields = [...textFields];
    updatedTextFields[index][field] = value;
    setTextFields(updatedTextFields);
  };
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  return (
    <>
      <Box
        style={{
          width: "55%",
          height: "auto",
          backgroundColor: "#f5f5f5",
          display: "flex",
          justifyContent: "flex-end",
          marginLeft: "10px",
          borderRadius: "10px",
        }}
      >
        <IconButton>
          <AddIcon
            onClick={handleAddField}
            style={{ color: "black", fontWeight: "bold" }}
          />
        </IconButton>
      </Box>
      <Box>
        {textFields.map((fieldValues, index) => (
          <Box
            key={index}
            style={{ display: "flex", marginLeft: "10px", marginTop: "20px" }}
          >
            {/* <Autocomplete
              options={options}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Product"
                  variant="outlined"
                  size="small"
                />
              )}
              value={fieldValues.Product}
              onChange={(event, value) =>
                handleInputChange(index, "Product", value)
              }
            /> */}
            <Autocomplete
              disablePortal
              size="small"
              id="combo-box-demo"
              options={companyNames}
              sx={{ width: 330 }}
              renderInput={(params) => (
                <TextField {...params} label="Select Product" />
              )}
            />
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              size="small"
              options={top100Films}
              sx={{ marginLeft: "20px" }}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.title}
                </li>
              )}
              style={{ width: 330 }}
              renderInput={(params) => (
                <TextField {...params} label="Roles" placeholder="Roles" />
              )}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },

  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
];
