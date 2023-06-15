import * as React from "react";
import { Link } from "react-router-dom";
import "./userMenu.css"
import {
    Box,
    Tooltip,
    Avatar,
    Typography,
    IconButton,
    Menu,
    MenuItem
} from "@mui/material";
import avtUser from '../../images/avtUser.jpg'
import AuthService from "../../services/authService";

const logOut = () => {
    AuthService.logout();
};

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Configurações">
                <IconButton onClick={handleClick} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" className="avatar-menu" src={avtUser} />
                </IconButton>
            </Tooltip>
            <div className="testes">
                <Menu
                    style={{ backgroundColor: '' }}
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <Link to='/perfil' style={{ textDecoration: 'none' }}>
                        <MenuItem
                            key="Perfil"
                            onClick={handleClose}>
                            <Typography textAlign="center"
                                style={{ color: "#726666", fontFamily: 'Quicksand', fontSize: '15px' }}>
                                Perfil
                            </Typography>
                        </MenuItem>
                    </Link>

                    <Link to='/minhasdoacoes' style={{ textDecoration: 'none' }}>
                        <MenuItem
                            key="Minhas Doações"
                            onClick={handleClose}>
                            <Typography textAlign="center"
                                style={{ color: "#726666", fontFamily: 'Quicksand', fontSize: '15px' }}>
                                Minhas Doações
                            </Typography>
                        </MenuItem>
                    </Link>

                    <Link to='/configuracoes' style={{ textDecoration: 'none' }}>
                        <MenuItem
                            key="Configurações"
                            onClick={handleClose}>
                            <Typography textAlign="center"
                                style={{ color: "#726666", fontFamily: 'Quicksand', fontSize: '15px' }}>
                                Configurações
                            </Typography>
                        </MenuItem>
                    </Link>

                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <MenuItem
                            key="Sair"
                            onClick={[handleClose, logOut]}>
                            <Typography textAlign="center"
                                style={{ color: "#726666", fontFamily: 'Quicksand', fontSize: '15px' }}>
                                Sair
                            </Typography>
                        </MenuItem>
                    </Link>
                </Menu>
            </div>
        </Box>
    );
};

export default UserMenu;
