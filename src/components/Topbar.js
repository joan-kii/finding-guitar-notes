import React, { useState, useContext } from 'react';
import { Context } from '../context/Context';
import LeftMenu from './LeftMenu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import RefreshIcon from '@material-ui/icons/Refresh';
import { motion } from 'framer-motion';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexGrow: 1,
  }, 
  toolbar: {
    justifyContent: 'space-between',
    background: '#424242',
    height: '8vh',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: theme.palette.common.white,
    textDecoration: 'none',
    cursor: 'pointer'
  },
  exerciseName: {
    marginLeft: '21em',
    marginRight: '20em',
    fontSize: '1.5em',
    cursor: 'context-menu',
  },
  menuChoice: {
    marginLeft: '18em',
    marginRight: '27em',
    fontSize: '1.5em',
    cursor: 'context-menu',
  },
  resetButton: {
    marginRight: '4em',
  },
  login: {
  }
}));

const Topbar = () => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { actualExercise, choiceMenu, resetExercise } = useContext(Context);

  const titleClassName = actualExercise ? classes.exerciseName : classes.menuChoice; 

  const handleAuth = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const openMenu = () => {
    setOpenDrawer(true);
  };
  
  return (
    <div className={classes.root}>
      <AppBar 
        position='static'>
        <Toolbar className={classes.toolbar}>
          <div className={classes.navigation}>
            <IconButton 
              edge='start' 
              onClick={openMenu}
              aria-label='open drawer'
              className={classes.menuButton}
              color='inherit'>
              <MenuIcon  />
            </IconButton>
            <Link className={classes.title} to='/'>
              <Typography 
                variant='h5'
                component={motion.h1} 
                initial={{y: -200}}
                animate={{y: -1}} >
                Finding Guitar Notes
              </Typography>
            </Link>
          </div>
          <Typography variant='h3' className={titleClassName}>
            {actualExercise.title || choiceMenu}
          </Typography>
          { actualExercise ? 
              <Button 
                className={classes.resetButton}
                variant='contained'
                startIcon={<RefreshIcon />}
                onClick={() => resetExercise(actualExercise)} >
                  Reset Exercise
              </Button> : ''}
          <IconButton 
            className={classes.login}
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
      <LeftMenu open={openDrawer} setOpen={setOpenDrawer} />
    </div>
  );
}; 

export default Topbar;

