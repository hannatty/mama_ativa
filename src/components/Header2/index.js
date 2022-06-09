import * as React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Tooltip,
  Avatar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import logo1 from "../../images/logo1.svg";
import "./header2.css";
import avtUser from '../../images/avtUser.jpg'

const settings = ["Perfil", "Configurações", "Sair"];

const Header2 = ({text , linkBoolean}) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <header>
      <Link className="logo1" to="/">
        <img src={logo1} alt="Logo Mama Ativa" className="logo" />
      </Link>
      {
        linkBoolean ? 
        <Link className="menu-options" to='/'> {text} </Link>
        :
        <p className="menu-options"> {text}</p>
      }
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Configurações">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src={avtUser} />
          </IconButton>
        </Tooltip>
        <Menu
          style={{backgroundColor: ''}}
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}
            >
              <Typography textAlign="center" 
              style={{ color: "#726666", fontFamily: 'Quicksand', fontSize: '15px' }}>
                {setting}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </header>
  );
};

export default Header2;
