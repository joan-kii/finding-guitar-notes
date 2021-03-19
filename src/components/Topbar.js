import React, { useState, useContext } from 'react';
import { ExercisesContext } from './Exercises';
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
    background: '#424242',
    height: '8vh',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0.7,
    color: theme.palette.common.white,
    textDecoration: 'none',
    cursor: 'pointer'
  },
  exerciseName: {
    flexGrow: 1,
    fontSize: '1.5em',
    cursor: 'context-menu',
  },
  resetButton: {
    marginRight: '4em',
  },
}));

const Topbar = () => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { actualExercise, choiceMenu, resetExercise } = useContext(ExercisesContext);

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
          <Typography variant='h3' className={classes.exerciseName}>
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

