import logo from "../../assets/easypayZ-logo.webp";
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
    <div className="w-full flex items-center justify-between px-2 md:px-6 py-3 shadow bg-[#0D0E16]">
      <img src={logo} alt="logo" className="w-[150px] max-sm:w-[125px]" />
      <span className="flex items-center">
        <Button aria-describedby={id} onClick={handleClick}>
          <FaRegBell
            fontSize={25}
            fill="skyBlue"
            onClick={handleClick}
            className="max-sm:hidden"
          />
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
            Yay!! You're all caught up!
          </Typography>
        </Popover>
        <UserAction />
      </span>
    </div>
  );
}

export default Head;
