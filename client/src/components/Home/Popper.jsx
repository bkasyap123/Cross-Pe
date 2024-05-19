import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { useLogout } from "../../hooks/useLogout";

export default function UserAction() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const logout = useLogout();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="max-md:hidden">
      <Button aria-describedby={id} onClick={handleClick}>
        <FaUserCircle fontSize={36} />
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
          onClick={() => logout()}
          sx={{ p: 1 }}
        >
          Logout
        </Typography>
      </Popover>
    </div>
  );
}
