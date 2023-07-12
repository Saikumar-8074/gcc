import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Divider } from "@mui/material";
import Person2Icon from "@mui/icons-material/Person2";
import LogoutIcon from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
export default function LoginInfo() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <span
        aria-describedby={id}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <Avatar sx={{ marginRight: "30px" }}>S</Avatar>
        {/* <AccountCircleIcon sx={{ fontSize: "38px", marginRight: "20px" }} /> */}
      </span>
      <Popover
        style={{
          marginTop: open ? "15px" : "",
          marginLeft: open ? "13px" : "",
          cursor: "pointer",
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ width: 340 }}>
          <Card sx={{ maxWidth: 345 }} onClick={handleClose}>
            <CardContent>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "13px",
                }}
              >
                <Avatar sx={{ padding: "28px" }}>S</Avatar>
                <div style={{ marginLeft: "10px" }}>
                  <div style={{ fontWeight: "bold" }}>Susan</div>
                  <div style={{ color: "#716f71" }}>Susan@gmail.com</div>
                </div>
              </div>
              <Divider style={{ marginTop: "3px" }} />
              <p
                style={{
                  marginTop: "10px",
                  fontSize: "13px",
                }}
              >
                <strong>Logged Time</strong> :{" "}
                <span style={{ color: "#716f71" }}>
                  {date}
                  {time}
                </span>
              </p>
              <Divider />
            </CardContent>
            <CardActions
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "13px",
              }}
            >
              <Link to="/users/myprofile">
                <Button size="small" style={{ color: "#ec5a02" }}>
                  <Person2Icon />
                  <strong> My Profile</strong>
                </Button>
              </Link>
              <Link to="/">
                <Button size="small" style={{ color: "#ec5a02" }}>
                  <LogoutIcon />
                  <strong>Sign out</strong>
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Typography>
      </Popover>
    </div>
  );
}
