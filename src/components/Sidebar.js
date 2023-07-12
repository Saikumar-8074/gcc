import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import icanImg from "../assets/ican_img1.png";
import logo from "../assets/logo.png";

import logoText from "../assets/logo_txt.png";
import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CampaignIcon from "@mui/icons-material/Campaign";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LanIcon from "@mui/icons-material/Lan";
import { Link } from "react-router-dom";
import LoginInfo from "./LoginInfo";
import { useLocation } from "react-router-dom";
import MainRoutes from "../Routes/MainRoutes";
import Login from "../Pages/Login";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const SidebarItems = [
  {
    label: "Home",
    path: "/users",
    icon: <HomeIcon />,
  },
  {
    label: "User",
    path: "/users/listuser",
    icon: <PeopleAltIcon />,
  },
  {
    label: "Customer",
    path: "/users/customer",
    icon: <LanIcon />,
  },
  {
    label: "Announcements",
    path: "/users/announcements",
    icon: <CampaignIcon />,
  },
  {
    label: "Status",
    path: "/users/status",
    icon: <CheckCircleIcon />,
  },
  {
    label: "Assign ICAN",
    path: "/users/assign_ican",
    icon: <HowToRegIcon />,
  },
 
];

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(5)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const location = useLocation();
  const { pathname } = location;

  const isLoginPage = pathname === "/";

  return (
    <div>
      {!isLoginPage && (
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar
              sx={{
                background:
                  "linear-gradient(54deg, rgba(255,255,255,1) 33%, rgba(255,195,50,1) 68%, rgba(255,99,0,1) 100%)",
              }}
            >
              <span
                style={{
                  color: "inherit",
                  cursor: "pointer",
                  marginRight: 5,
                  display: open ? "none" : "inline-block",
                  textAlign: "center",
                  position: "relative",
                }}
                onClick={handleDrawerOpen}
                aria-label="open drawer"
              >
                 <img
                      src={logo}
                      width="35px"
                      height="44px"
                      alt="logo"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    />
              </span>

              <span
                style={{
                  borderLeft: "1px solid #f5f5f5",
                  height: "50px",
                  marginLeft: "27px ",
                  display: open ? "none" : "inline-block",
                }}
              ></span>
              <Typography
                variant="h5"
                noWrap
                component="div"
                style={{
                  color: "#72ba44",
                  marginLeft: open ? "" : "30px",
                  fontSize: "26px",
                  fontFamily: "MyriadPro-Semibold",
                  fontWeight: "bold",
                }}
              >
                {/* {pathname === "/users" && "User List"}
                {pathname === "/users/listuser" && "User List"}
                {pathname === "/users/customer" && "Customer"}
                {pathname === "/users/announcements" && "Announcements"}
                {pathname === "/users/status" && "Status"}
                {pathname === "/users/myprofile" && "My Profile"}
                {pathname === "/users/createuser" && "Create User"} */}
              </Typography>
              <div style={{ marginLeft: "auto" }}>
                <img src={icanImg} alt="Logo" />
              </div>
              <div style={{ marginLeft: "20px" }}>
                <LoginInfo />
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <span onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <div style={{ display: "flex", cursor: "pointer" }}>
                    
                      <img
                      src={logo}
                      width="35px"
                      height="44px"
                      alt="logo"
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    />
                    <img
                      src={logoText}
                      width="70%"
                      height="100%"
                      alt="logoText"
                    />
                  </div>
                ) : (
                  ""
                )}
              </span>
            </DrawerHeader>
            <Divider />
            <List sx={{ backgroundColor: "rgb(52,152,219)", height: "100vh" }}>
              {SidebarItems.map((item) => (
                <div
                  style={{
                    background:
                      pathname === item.path ? "#16669c" : "transparent",
                    marginTop: "-7px",
                  }}
                >
                  <Link
                    to={item.path}
                    disablePadding
                    sx={{ display: "block" }}
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                          color: "white",
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.label}
                        sx={{
                          opacity: open ? 10 : 0,
                          color: "white",
                          textDecoration: "none",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </div>
              ))}
            </List>
            <Divider />
          </Drawer>

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {/* {ALL Roues Herer} */}
            <MainRoutes />
          </Box>
        </Box>
      )}
      {isLoginPage && <Login />}
    </div>
  );
}