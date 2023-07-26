
import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Card,
  CardContent,
  Divider,
  Box,
  TextField,
  Autocomplete,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import EngineeringIcon from "@mui/icons-material/Engineering";
import BusinessIcon from "@mui/icons-material/Business";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import './Step4Form.css';
const steps = [
  "Customer Creation",
  "Product Creation",
  "Role Creation",
  "Company Customer Creation",
];

const icons = [
  <PeopleIcon fontSize="medium" />,
  <InventoryIcon fontSize="medium"/>,
  <EngineeringIcon fontSize="medium" />,
  <BusinessIcon fontSize="medium"/>,
];


// Custom StepIconComponent
const QontoStepIcon = (props) => {
  const { active, completed, icon } = props;
  const activeColor = "	#f77f00";
  const inactiveColor = "lightgrey";

  return (
    <div
      style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        backgroundColor: active ? activeColor : inactiveColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {completed ? (
        <CheckCircleIcon style={{ color: "white" }} />
      ) : (
        <>{icon}</>
      )}
    </div>
  );
};

const CreateCustomer = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
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
            to="/users/listcustomer"
          >
            Customers
          </Link>
          <Link
            color="primary"
            style={{ textDecoration: "none" }}
            aria-current="page"
            to="/users/createcustomer"
          >
            Create Customer
          </Link>
        </Breadcrumbs>
      </div>
      <Card
        sx={{
          width: "102%",
          marginLeft: "-15px",
          marginTop: "20px",
          height: "600px",
        }}
      >
        <CardContent
        sx={{
          fontSize: 14,
          backgroundColor: "#f5f5f5",
          height: "12vh",
        }}
        color="text.secondary"
        gutterBottom
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          style={{ marginLeft: "-60px", width: "100%" }}
        >
          {steps.map((label, index) => (
            <Step key={label} completed={activeStep > index}>
              <StepLabel
                StepIconComponent={() => (
                  <QontoStepIcon
                    active={activeStep === index}
                    completed={activeStep > index}
                    icon={icons[index]}
                  />
                )}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </CardContent>

        <Divider sx={{ bgcolor: "secondary.light" }} />

        <div>
          {activeStep === steps.length ? (
            <Typography variant="h5" sx={{ mt: 7 }}>
              Customer Created Successfully!!!.
            </Typography>
          ) : (
            <div style={{ marginLeft: "auto" }}>
              {/* Render form components based on the active step */}
              {activeStep === 0 && <Step1Form />}
              {activeStep === 1 && <Step2Form />}
              {activeStep === 2 && <Step3Form />}
              {activeStep === 3 && <Step4Form />}
              {/* Buttons for navigating between steps */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "20px",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    marginRight: "30px",
                    backgroundColor: "#ff3d00",
                    color: "white",
                  }}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Save & Next"}
                </Button>
                <Button
                  variant="contained"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  style={{
                    marginRight: "70px",
                    backgroundColor: "#ff3d00",
                    color: "white",
                  }}
                >
                  Back
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card>
    </>
  );
};
//start here
// Step 1 form component
const Step1Form = () => {
  return (
    <>
      <Box
        className="mx-2 mt-4"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "33.5ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label={
            <span>
              Company Name <span style={{ color: "#e60000" }}>*</span>
            </span>
          }
          variant="outlined"
          
        />
        <TextField
          id="outlined-basic"
          label={
            <span>
              Description <span style={{ color: "#e60000" }}>*</span>
            </span>
          }
          variant="outlined"
          
        />
        <TextField
          id="outlined-basic"
          label={
            <span>
              Email Id <span style={{ color: "#e60000" }}>*</span>
            </span>
          }
          variant="outlined"
          
        />
      </Box>
      <Box
        className="mx-2 mt-2 d-flex"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "33.5ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label={
            <span>
              Address <span style={{ color: "#e60000" }}>*</span>
            </span>
          }
          variant="outlined"
          
        />
        <Autocomplete
          id="country-select-demo"
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
              label={
                <span>
                  Select country <span style={{ color: "#e60000" }}>*</span>
                </span>
              }
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
              label={
                <span>
                  select country <span style={{ color: "#e60000" }}>*</span>
                </span>
              }
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
              }}
              
            />
          )}
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
          label={
            <span>
              Zip Code <span style={{ color: "#e60000" }}>*</span>
            </span>
          }
          variant="outlined"
          
        />
        <TextField
          id="outlined-basic"
          label={
            <span>
              Phone Number <span style={{ color: "#e60000" }}>*</span>
            </span>
          }
          variant="outlined"
          
        />
        <Button
          variant="outlined"
          component="label"
          sx={{ pt: 0.75, px: 18.5 }}
          size="small"
          color="success"
        >
          Organization Logo
          <input type="file" hidden required />
        </Button>
      </Box>
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

// Step 2 form component

const Step2Form = () => {
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleAddProduct = () => {
    setProducts((prevProducts) => [...prevProducts, product]);
    setProduct("");
  };

  const handleRemoveProduct = (index) => {
    setProducts((prevProducts) => prevProducts.filter((_, i) => i !== index));
  };

  return (
    <div >
      <Card className="mx-2 mt-4" sx={{ width: "65%" }}>
        <CardContent>
          <div className="form-row">
            <TextField
              id="product"
              label={
                <span>
                  Product <span style={{ color: "#e60000" }}>*</span>
                </span>
              }
              variant="outlined"
              value={product}
              onChange={handleProductChange}
              
              inputProps={{ style: { width: "600px" } }}
            />
            <Button
              variant="contained"
              onClick={handleAddProduct}
              sx={{ height: "55.5px" }}
            >
              Add Product
            </Button>
          </div>
        </CardContent>
      </Card>
      <Typography variant="body1" sx={{ mt: 2 }}></Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {products.map((product, index) => (
          <Button
            key={index}
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              textTransform: "none",
              margin: "0.5rem",
              width: "calc(33.33% - 1rem)",
              minWidth: "100px",
              maxWidth: "150px",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            {product}
            <IconButton
              size="small"
              sx={{
                color: "black",
                marginLeft: "auto",
                "&:hover": {
                  color: "red",
                },
              }}
              onClick={() => handleRemoveProduct(index)}
            >
              <CloseIcon />
            </IconButton>
          </Button>
        ))}
      </div>
    </div>
  );
};

// Step 3 form component




const Step3Form = () => {
  const [roles, setRoles] = useState([]);
  const [newRole, setNewRole] = useState("");

  const handleRoleChange = (event) => {
    setNewRole(event.target.value);
  };

  const handleAddRole = () => {
    if (newRole.trim() !== "") {
      setRoles([...roles, newRole]);
      setNewRole("");
    }
  };

  const handleRemoveRole = (index) => {
    setRoles((prevRoles) => prevRoles.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Card className="mx-2 mt-4" sx={{ width: "60%" }}>
        <CardContent>
          <form
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="role"
              label={
                <span>
                  Role <span style={{ color: "#e60000" }}>*</span>
                </span>
              }
              variant="outlined"
              value={newRole}
              onChange={handleRoleChange}
              
              inputProps={{ style: { width: "700px" } }}
            />
            <Button
              variant="contained"
              onClick={handleAddRole}
              sx={{ height: "55.5px", marginLeft: "1rem" }}
            >
              Add Role
            </Button>
          </form>
        </CardContent>
      </Card>

      <table
        style={{
          width: "80%",
          marginTop: "20px",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                width: "20%",
                textAlign: "center",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              Product
            </th>
            <th
              style={{
                width: "20%",
                textAlign: "center",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                width: "30%",
                textAlign: "center",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              sai
            </td>
            <td
              style={{
                width: "70%",
                textAlign: "center",
                border: "1px solid black",
                padding: "8px",
              }}
            >
              {roles.map((role, index) => (
                <Button
                  key={index}
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "white",
                    color: "black",
                    textTransform: "none",
                    marginRight: 2,
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span>{role}</span>
                    <IconButton
                      size="small"
                      sx={{ color: "black" }}
                      onClick={() => handleRemoveRole(index)}
                    >
                      <CloseIcon fontSize="small" sx={{ color: "red" }} />
                    </IconButton>
                  </div>
                </Button>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

//step4 Form components


const Step4Form = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showBranchPopup, setShowBranchPopup] = useState(false);
  const [companyDetails, setCompanyDetails] = useState({
    name: '',
    description: '',
    address: '',
  });
  const [customerDetails, setCustomerDetails] = useState([]);
  const [branches, setBranches] = useState([]);
  const [selectedCustomerIndex, setSelectedCustomerIndex] = useState(null);

  const handleCompanyDetailsChange = (event) => {
    const { name, value } = event.target;
    setCompanyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddCompany = () => {
    const newCustomer = { ...companyDetails };
    setCustomerDetails((prevDetails) => [...prevDetails, newCustomer]);
    setCompanyDetails({
      name: '',
      description: '',
      address: '',
    });
    setShowPopup(false);
  };

  const handleAddBranch = (index) => {
    setSelectedCustomerIndex(index);
    setShowBranchPopup(true);
  };

  const handleBranchDetailsChange = (event) => {
    const { name, value } = event.target;
    setCompanyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddBranchDetails = () => {
    const newBranch = { ...companyDetails };
    setBranches((prevBranches) => [...prevBranches, newBranch]);
    setCompanyDetails({
      name: '',
      description: '',
      address: '',
    });
    setShowBranchPopup(false);
  };

  const handleDeleteCustomer = (index) => {
    setCustomerDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails.splice(index, 1);
      return updatedDetails;
    });
  };

  const handleEditCustomer = (index) => {
    const customerToEdit = customerDetails[index];
    setCompanyDetails(customerToEdit);
    setSelectedCustomerIndex(index);
    setShowPopup(true);
  };

  const handleDeleteBranch = (index) => {
    setBranches((prevBranches) => {
      const updatedBranches = [...prevBranches];
      updatedBranches.splice(index, 1);
      return updatedBranches;
    });
  };

  const handleEditBranch = (index) => {
    const branchToEdit = branches[index];
    setCompanyDetails(branchToEdit);
    setSelectedCustomerIndex(index);
    setShowBranchPopup(true);
  };

  return (
    <div>
      <div className="card-container">
        <Card sx={{ width: '65%' }}>
          <CardContent>
            <TextField
               label={
                <span>
                  Company Name <span style={{ color: "#e60000" }}>*</span>
                </span>
              }
              type="text"
              value="Cognitive Health IT"
              disabled
              className="text-field"
              inputProps={{ style: { width: '450px' } }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowPopup(true)}
              className="button"
            >
              Add Company Customer
            </Button>
          </CardContent>
        </Card>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="navbar" style={{ backgroundColor: "#e67300" }}>
              <div className="company-name">Cognitive Health IT</div>
              <span className="close" onClick={() => setShowPopup(false)}>
                &times;
              </span>
            </div>
            <div className="popup-body">
              <TextField
                 label={
                  <span>
                    Costumer Name <span style={{ color: "#e60000" }}>*</span>
                  </span>
                }
                type="text"
                name="name"
                value={companyDetails.name}
                onChange={handleCompanyDetailsChange}
                placeholder="Customer Name"
                sx={{ marginBottom: '10px' }}
              />
              <TextField
               label={
                <span>
                  Description <span style={{ color: "#e60000" }}>*</span>
                </span>
              }
                type="text"
                name="description"
                value={companyDetails.description}
                onChange={handleCompanyDetailsChange}
                placeholder="Description"
                sx={{ marginBottom: '10px' }}
              />
              <TextField
               label={
                <span>
                  Address <span style={{ color: "#e60000" }}>*</span>
                </span>
              }
                type="text"
                name="address"
                value={companyDetails.address}
                onChange={handleCompanyDetailsChange}
                placeholder="Address"
                sx={{ marginBottom: '10px' }}
              />
              <div className="button-group">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddCompany}
                  className="add-button"
                  sx={{ marginRight: '10px' }}
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setShowPopup(false)}
                  className="close-button"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showBranchPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="navbar"  style={{ backgroundColor: "#e67300" }}>
              <div className="branch-name">Add Branch</div>
              <span
                className="close"
                onClick={() => setShowBranchPopup(false)}
              >
                &times;
              </span>
            </div>
            <div className="popup-body">
              <TextField
                 label={
                  <span>
                    Branch Name <span style={{ color: "#e60000" }}>*</span>
                  </span>
                }
                type="text"
                name="name"
                value={companyDetails.name}
                onChange={handleBranchDetailsChange}
                placeholder="Branch Name"
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                label={
                  <span>
                    Description <span style={{ color: "#e60000" }}>*</span>
                  </span>
                }
                type="text"
                name="description"
                value={companyDetails.description}
                onChange={handleBranchDetailsChange}
                placeholder="Description"
                sx={{ marginBottom: '10px' }}
              />
              <TextField
                 label={
                  <span>
                    Products <span style={{ color: "#e60000" }}>*</span>
                  </span>
                }
                type="text"
                name="products"
                value={companyDetails.products}
                onChange={handleBranchDetailsChange}
                placeholder="Products"
                sx={{ marginBottom: '10px' }}
              />
              <div className="button-group">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddBranchDetails}
                  className="add-button"
                  sx={{ marginRight: '10px' }}
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setShowBranchPopup(false)}
                  className="close-button"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="customer-details">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Customer Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Address</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerDetails.map((customer, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>{customer.name}</TableCell>
                  <TableCell>{customer.description}</TableCell>
                  <TableCell>{customer.address}</TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      onClick={() => handleAddBranch(index)}
                      className="add-branch-button"
                    >
                      Add Branch
                    </Button>
                    <IconButton
                      aria-label="Delete"
                      onClick={() => handleDeleteCustomer(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      aria-label="Edit"
                      onClick={() => handleEditCustomer(index)}
                    >
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                {branches.map((branch, idx) =>
                  idx === index ? (
                    <TableRow key={idx}>
                      <TableCell colSpan={4}>
                        <div className="branch-item">
                          <div>
                            <p>
                              {branch.name} - Branch | Description: {branch.description} | Products: {branch.products}
                            </p>
                          </div>
                          <div>
                            <IconButton
                              aria-label="Edit"
                              onClick={() => handleEditBranch(idx)}
                              className="edit-branch-icon"
                            >
                              <EditIcon />
                            </IconButton>
                            <IconButton
                              aria-label="Delete"
                              onClick={() => handleDeleteBranch(idx)}
                              className="delete-branch-icon"
                            >
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : null
                )}
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};



export default CreateCustomer;