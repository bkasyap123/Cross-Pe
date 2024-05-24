import logo from "../../assets/easypayZ-logo.png";
import UserAction from "./Popper.jsx";
import { FaRegBell } from "react-icons/fa";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Head() {
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
    <div className="w-full flex items-center justify-between px-3 md:px-6 py-3 shadow">
      <img src={logo} alt="logo" className="w-[150px]" />
      <span className="flex items-center">
        <Button aria-describedby={id} onClick={handleClick}>
          <FaRegBell fontSize={30} fill="skyBlue" onClick={handleClick} />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Typography
            className="cursor-pointer"
            // onClick={() => logout()}
            sx={{ p: 1 }}
            maxWidth={350}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro,
            qlorem100 uibusdam! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Porro, qlorem100 uibusdam!
          </Typography>
        </Popover>
        <UserAction />
      </span>
    </div>
  );
}

export default Head;
