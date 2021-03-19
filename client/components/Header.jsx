import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  MuiMenuItemButton: {
    color: 'white',
  },
  appBar: {
    height: theme.header.height,
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    textTransform: 'none',
    fontFamily: 'Roboto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: 'white',
    textDecoration: 'none',
  },
  title: {
    ...theme.typography.h1,
    flexGrow: 1,
    fontSize: '30px',
    fontWeight: 'bold',
    letterSpacing: '4px',
  },
}));

// TODO: links/routing, mobile
const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h1" className={classes.title}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>311DATA</Link>
        </Typography>
        <Link to="/map">
          <Button className={classes.button}>Map</Button>
        </Link>
        <Button
          id="report-anchor"
          onClick={handleClick}
          className={classes.button}
        >
          Reports
        </Button>
        <Menu
          id="report-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Link to="/reports/dashboards/overview">
            <MenuItem onClick={handleClose} button className={classes.button}>
              Overview
            </MenuItem>
          </Link>
          <Link to="/reports/dashboards/recent">
            <MenuItem onClick={handleClose} button className={classes.button}>
              Recent
            </MenuItem>
          </Link>
          <Link to="/reports/dashboards/neighborhood">
            <MenuItem onClick={handleClose} button className={classes.button}>
              Neighborhood
            </MenuItem>
          </Link>
          <Link to="/reports/dashboards/neighborhood_recent">
            <MenuItem onClick={handleClose} button className={classes.button}>
              Neighborhood Recent
            </MenuItem>
          </Link>
        </Menu>
        <Link to="/faqs">
          <Button className={classes.button}>FAQ</Button>
        </Link>
        <Link to="/blog">
          <Button className={classes.button}>Blog</Button>
        </Link>
        <Link to="/privacy">
          <Button className={classes.button}>Privacy</Button>
        </Link>
        <Link to="/contact">
          <Button className={classes.button}>Contact</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
