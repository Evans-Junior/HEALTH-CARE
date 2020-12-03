import React from 'react';
import "./Header.css";
import {Avatar} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { VscMenu } from "react-icons/vsc";
import { Link } from "react-router-dom";


function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
        <div className="header">
        <div className="options">
      <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        <VscMenu  size="1rem"/>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Doctors</MenuItem>
        <MenuItem onClick={handleClose}>About</MenuItem>
        <MenuItem onClick={handleClose}></MenuItem>

      </Menu>
    </div>
            <div className="name">
                  <h3>Health  Care</h3>
            </div>
            <div className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo"><Link to="/login" className="link"> Sign In</Link></span>
            <span className="header__optionLineThree"><Link to="/signup" className="link">Sign Up</Link></span>
            <Avatar size="-1rem" className="pic"/>
          </div>

        </div>
    );
}

export default Header;