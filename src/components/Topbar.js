import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }, 
  toolbar: {
    background: '#424242',
    height: '8vh',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.7,
    fontSize: '1.5em',
    cursor: 'context-menu'
  },
  exerciseName: {
    flexGrow: 1,
    justifyContent: 'center',
    fontSize: '1.5em',
    cursor: 'context-menu',
  }
}));

const Topbar = () => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleAuth = (event) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
    console.log(anchorEl)
  };
  
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <IconButton 
            edge='start' 
            aria-label='menu'
            className={classes.menuButton}
            color='inherit'>
            <MenuIcon />
          </IconButton>
          <Typography variant='h1' className={classes.title}>
            Finding Guitar Notes
          </Typography>
          <Typography variant='h3' className={classes.exerciseName}>
            
          </Typography>
          <IconButton 
            edge='end'
            onClick={handleAuth}
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}; 

export default Topbar;

