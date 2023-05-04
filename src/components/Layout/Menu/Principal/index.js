import * as React from 'react';
import { Link } from "react-router-dom";
import logo1 from "../../../../images/logo1.svg";
import "./styles.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';

const Principal = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

        <ListItem>
          <ListItemButton className='close'>
            <Link className="menu" to='/quemsomos' >Quem Somos</Link>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <Link className="menu" to='/' >Parcerias </Link>
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <Link className="menu" to='/contato'>Contato </Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
          <Link className='menu' to="/">Política de Privacidade</Link>
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem>
          <ListItemButton>
            <Link to='/areadoadora'>
              <button className="register-button" >Entrar</button>
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <header>
      <div className="desktop">
        <Link className="logo1" to="/">
          <img src={logo1} alt="Logo Mama Ativa" className="logo" />
        </Link>
        <Link className="menu" to='/quemsomos' >Quem Somos</Link>
        <Link className="menu" to='/' >Parcerias </Link>
        <Link className="menu" to='/contato'>Contato </Link>
        <Link to='/areadoadora'>
          <button className="register-button" >Entrar</button>
        </Link>
      </div>

      <div className="mobile">
        <div>
        <Link className="logo1" to="/">
          <img src={logo1} alt="Logo Mama Ativa" className="logo" />
        </Link>
        </div>
    <div>
    {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            
           <DensitySmallIcon  className='button'   onClick={toggleDrawer(anchor, true)}/>
            <Drawer
           
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
    </div>
       
      </div>


    </header>

  );
};

export default Principal;
