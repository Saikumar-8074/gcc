import React, { useState } from "react";
import Button from "@mui/material/Button";
import LoginImage from "../images/login.png";
import LogoImage from "../images/CogntiveLogo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import Modal from "@mui/joy/Modal";
import Sheet from "@mui/joy/Sheet";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import "../Pages/Login.css";
import { Link, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";

function Login() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  const handlePassword = () => {
    setshow(!show);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (name && password) {
      setSuccess(true);
      setTimeout(() => {
        navigate("/users");
      }, 2000);
      return;
    } else {
      setError(true);
      return;
    }
  };

  return (
    <div className="login_body">
      <div className="form-box">
        <div className="login_transbg1"></div>
        <div className="login_transbg2"></div>
        <div className="form-box_in shadow-lg">
          <div className="row">
            <div className=" col-lg-6 p-0">
              <div className="form_left">
                <h3 className="text-white fs-4 text-center pt-5">LOGIN</h3>
                <div className="cartoon_img">
                  <img src={LoginImage} alt="LogoText" />
                </div>
              </div>
            </div>
            <div className=" col-lg-6 p-0">
              <div className="form_right">
                <div className="logo_img">
                  <img src={LogoImage} alt="Logo" />
                </div>
                {success ? (
                  <div
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      fontStyle: "italic",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    Login Successfully...!
                  </div>
                ) : (
                  ""
                )}

                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {
                      m: 1,
                      ml: 0,
                      width: "33ch",
                    },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      sx={{ ml: 0 }}
                      id="outlined-username-input"
                      label="UserName"
                      type="text"
                      size="small"
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="current-username"
                      inputProps={{ style: { fontSize: 14 } }}
                      InputLabelProps={{ style: { fontSize: 14 } }}
                    />
                    {error && name.length <= 0 ? (
                      <span style={{ color: "red", fontStyle: "italic" }}>
                        please enter username
                      </span>
                    ) : (
                      ""
                    )}
                    <TextField
                      sx={{ ml: "0", position: "relative" }}
                      id="outlined-password-input"
                      label="Password"
                      type={show ? "text" : "password"}
                      size="small"
                      onChange={(e) => setPassword(e.target.value)}
                      inputProps={{ style: { fontSize: 14 } }}
                      InputLabelProps={{ style: { fontSize: 14 } }}
                      autoComplete="current-password"
                      InputProps={{
                        endAdornment: (
                          <span
                            style={{
                              position: "absolute",
                              top: "50%",
                              right: "8px",
                              transform: "translateY(-50%)",
                              cursor: "pointer",
                            }}
                            onClick={handlePassword}
                          >
                            {show ? <VisibilityIcon /> : <VisibilityOffIcon />}
                          </span>
                        ),
                      }}
                    />

                    {error && password.length <= 0 ? (
                      <span style={{ color: "red", fontStyle: "italic" }}>
                        please enter password
                      </span>
                    ) : (
                      ""
                    )}
                    <Box sx={{ display: "flex", gap: 2, mt: 1 }}>
                      <FormControl>
                        <Link
                          to="#"
                          style={{ fontSize: "0.8rem", textDecoration: "none" }}
                        >
                          Forgot Password
                        </Link>
                      </FormControl>
                      <FormControl>
                        <a
                          href="#"
                          style={{ fontSize: "0.8rem", textDecoration: "none" }}
                        >
                          Don't have an account? Sign Up
                        </a>
                      </FormControl>
                    </Box>
                  </div>
                </Box>
                <Button
                  variant="contained"
                  className="mt-3"
                  size="medium"
                  fullWidth
                  onClick={handleClick}
                >
                  Sign in
                </Button>
                <a
                  href="#"
                  size="xs"
                  onClick={() => setOpen(true)}
                  style={{
                    fontSize: "0.8rem",
                    textDecoration: "none",
                    textAlign: "center",
                    display: "block",
                    marginTop: "1rem",
                  }}
                >
                  Terms and Conditions
                </a>
                <Modal
                  aria-labelledby="modal-title"
                  aria-describedby="modal-desc"
                  open={open}
                  onClose={() => setOpen(false)}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "450px",
                    overflow: "scroll",
                    paddingTop: "20px",
                    marginTop: "100px",
                  }}
                >
                  <Sheet
                    variant="outlined"
                    sx={{
                      maxWidth: 1000,
                      borderRadius: "md",
                      p: 3,
                      boxShadow: "lg",
                    }}
                  >
                    <ModalClose
                      variant="outlined"
                      sx={{
                        top: "calc(-1/4 * var(--IconButton-size))",
                        right: "calc(-1/4 * var(--IconButton-size))",
                        boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
                        borderRadius: "70%",
                        bgcolor: "background.body",
                      }}
                    />
                    <Typography
                      component="h2"
                      id="modal-title"
                      level="h4"
                      textColor="inherit"
                      fontWeight="lg"
                      mb={1}
                    >
                      Terms and Conditions
                    </Typography>
                    <Typography
                      id="modal-desc"
                      mb={1}
                      component="h3"
                      level="h5"
                      textColor="inherit"
                      marginTop="1100px"
                    >
                      In using this website, you are deemed to have read and
                      agreed to the following terms and conditions:
                    </Typography>
                    <Typography
                      id="modal-desc"
                      mb={2}
                      textColor="text.tertiary"
                    >
                      The following terminology applies to these Terms and
                      Conditions, Privacy Statement and Disclaimer Notice and
                      any or all Agreements: "Client", “You” and “Your” refers
                      to you, the person accessing this website and accepting
                      the Company’s terms and conditions. "The Company",
                      “Ourselves”, “We” and "Us", refers to our Company.
                      “Party”, “Parties”, or “Us”, refers to either the Client
                      or ourselves. All terms refer to the offer, acceptance,
                      and consideration of payment necessary to undertake the
                      process of our assistance to the Client in the most
                      appropriate manner, whether by formal meetings of a fixed
                      duration or any other means, for the express purpose of
                      meeting the Client’s needs in respect of the provision of
                      the Company’s stated services/products, following and
                      subject to, prevailing American Law. Any use of the above
                      terminology or other words in the singular, plural,
                      capitalization and/or he/she or they, are taken as
                      interchangeable and therefore as referring to same.
                    </Typography>
                    <Typography
                      id="modal-desc"
                      mb={2}
                      textColor="text.tertiary"
                    >
                      We will not sell, share, or rent your personal information
                      to any third party or use your e-mail address for
                      unsolicited mail. Any emails sent by this Company will
                      only be in connection with the provision of agreed
                      services and products.
                    </Typography>
                    <Typography
                      id="modal-desc"
                      textColor="inherit"
                      component="h3"
                      level="h5"
                    >
                      General
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      The laws of the United States of America govern these
                      terms and conditions. By accessing this website and using
                      our services you consent to these terms and conditions and
                      the exclusive jurisdiction of the USA courts in all
                      disputes arising out of such access. If any of these terms
                      are deemed invalid or unenforceable for any reason
                      (including, but not limited to the exclusions and
                      limitations set out above), then the invalid or
                      unenforceable provision will be severed from these terms
                      and the remaining terms will continue to apply. Failure of
                      the Company to enforce any of the provisions set out in
                      these Terms and Conditions and any Agreement, or failure
                      to exercise any option to terminate, shall not be
                      construed as a waiver of such provisions and shall not
                      affect the validity of these Terms and Conditions or any
                      Agreement or any part thereof, or the right thereafter to
                      enforce every provision. These Terms and Conditions shall
                      not be amended, modified, varied or supplemented except in
                      writing and signed by duly authorized representatives of
                      the Company.
                    </Typography>
                    <Typography
                      id="modal-desc"
                      textColor="inherit"
                      component="h3"
                      level="h5"
                    >
                      Privacy Statement
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      We are registered under the Data Protection Act 1998 and
                      as such, any information concerning the Client and their
                      respective Client Records may be passed to third parties.
                      However, Client records are regarded as confidential and
                      therefore will not be divulged to any third party, other
                      than [our manufacturer/supplier(s) and] if legally
                      required to do so to the appropriate authorities. Clients
                      have the right to request sight of, and copies of any and
                      all Client Records we keep, on the proviso that we are
                      given reasonable notice of such a request. Clients are
                      requested to retain copies of any literature issued in
                      relation to the provision of our services. Where
                      appropriate, we shall issue Client’s with appropriate
                      written information, handouts or copies of records as part
                      of an agreed contract, for the benefit of both parties.
                    </Typography>
                    <Typography
                      id="modal-desc"
                      textColor="inherit"
                      component="h3"
                      level="h5"
                    >
                      Confidentiality
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      We are registered under the Data Protection Act 1998. We
                      are a covered entity and are permitted, but not required,
                      to use and disclose protected health information, without
                      an individual’s authorization, for the following purposes
                      or situations: (1) To the Individual (unless required for
                      access or accounting of disclosures); (2) Treatment,
                      Payment, and Health Care Operations; (3) Opportunity to
                      Agree or Object; (4) Incident to an otherwise permitted
                      use and disclosure; (5) Public Interest and Benefit
                      Activities; and (6) Limited Data Set for research, public
                      health or health care operations.18 Covered entities may
                      rely on professional ethics and best judgments in deciding
                      which of these permissive uses and disclosures to make.
                    </Typography>
                    <Typography
                      id="modal-desc"
                      textColor="inherit"
                      component="h3"
                      level="h5"
                    >
                      Cookies
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      Like most interactive web sites this Company’s website [or
                      ISP] uses cookies to enable us to retrieve user details
                      for each visit. Cookies are used in some areas of our site
                      to enable the functionality of this area and ease of use
                      for those people visiting. Some of our affiliate partners
                      may also use cookies.
                    </Typography>
                    <Typography
                      id="modal-desc"
                      textColor="inherit"
                      component="h3"
                      level="h5"
                    >
                      Log Files
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      We use IP addresses to analyze trends, administer the
                      site, track user’s movement, and gather broad demographic
                      information for aggregate use. IP addresses are not linked
                      to personally identifiable information. Additionally, for
                      systems administration, detecting usage patterns and
                      troubleshooting purposes, our web servers automatically
                      log standard access information including browser type,
                      access times/open mail, URL requested, and referral URL.
                      This information is not shared with third parties and is
                      used only within this Company on a need-to-know basis. Any
                      individually identifiable information related to this data
                      will never be used in any way different to that stated
                      above without your explicit permission.
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      This Company’s logo is a registered trademark of this
                      Company in the United State of America and other
                      countries. The brand names and specific services of this
                      Company featured on this web site are trademarked.
                    </Typography>
                    <Typography
                      id="modal-desc"
                      textColor="inherit"
                      component="h3"
                      level="h5"
                    >
                      Links to this website
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      You may not create a link to any page of this website
                      without our prior written consent. If you do create a link
                      to a page of this website, you do so at your own risk and
                      the exclusions and limitations set out above will apply to
                      your use of this website by linking to it.
                    </Typography>
                    <Typography
                      id="modal-desc"
                      textColor="inherit"
                      component="h3"
                      level="h5"
                    >
                      Copyright Notice
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      Copyright and other relevant intellectual property rights
                      exist on all text relating to the Company’s services and
                      the full content of this website.
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      These terms and conditions form part of the Agreement
                      between the Client and ourselves. Your accessing of this
                      website indicates your understanding, agreement to and
                      acceptance, of the Disclaimer Notice and the full Terms
                      and Conditions contained herein.
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                      © CognitiveHealth 2019 All Rights Reserved
                    </Typography>
                  </Sheet>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
