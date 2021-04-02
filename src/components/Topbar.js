import React, { useState, useContext, useEffect } from 'react';
import { Context, useAuth } from '../context/Context';
import LeftMenu from './LeftMenu';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Modal from '@material-ui/core/Modal';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
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
  logoutButton: {
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
};

const Topbar = () => {

  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const { actualExercise, choiceMenu, 
    resetExercise, openSignupModal, setOpenSignupModal, 
    openLoginModal, setOpenLoginModal } = useContext(Context);
  
  const { currentUser, logout, signinError, setSigninError } = useAuth();
  const titleClassName = actualExercise ? classes.exerciseName : classes.menuChoice;

  useEffect(() => {
    if (currentUser) setShowLoginAlert(true)
  }, [currentUser])
   
  const handleCloseAlert = () => {
    setShowLoginAlert(false);
    setShowLogoutAlert(false);
  };

  const handleAuth = () => {
    setOpenSignupModal(true);
  };

  const openMenu = () => {
    setOpenDrawer(true);
  };

  const handleCloseSignupModal = () => {
    setOpenSignupModal(false);
  };

  const handleCloseLoginModal = () => {
    setOpenLoginModal(false);
  };

  async function handleLogout() {
      await logout().then(() => {
        setShowLogoutAlert(true);
      });
  };

  const renderSignup = (<div><SignupForm /></div>);
  const renderLogin = (<div><LoginForm /></div>);
  
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
          {currentUser ? 
            <Button 
              className={classes.logoutButton}
              variant='contained'
              endIcon={<ExitToAppIcon />}
              onClick={handleLogout} >
              Log Out
            </Button> : 
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
            }
        </Toolbar>
      </AppBar>
      <Modal 
        open={openSignupModal} 
        onClose={handleCloseSignupModal} 
        aria-labelledby="modal-title"
        aria-describedby="modal-description">
        {renderSignup}
      </Modal>
      <Modal 
        open={openLoginModal} 
        onClose={handleCloseLoginModal} 
        aria-labelledby="modal-title"
        aria-describedby="modal-description">
        {renderLogin}
      </Modal>
      <Snackbar 
        open={showLoginAlert} 
        autoHideDuration={4000}
        onClose={handleCloseAlert}>
        <Alert severity='success'>
          You are logged in!
        </Alert>
      </Snackbar>
      <Snackbar 
        open={showLogoutAlert} 
        autoHideDuration={4000}
        onClose={handleCloseAlert}>
        <Alert severity='success'>
          You are logged out!
        </Alert>
      </Snackbar>
      <Snackbar 
        open={signinError} 
        autoHideDuration={4000}
        onClose={() => setSigninError(false)}>
        <Alert severity='error'>
          Unable to Sign In!
        </Alert>
      </Snackbar>
      <LeftMenu open={openDrawer} setOpen={setOpenDrawer} />
    </div>
  );
}; 

export default Topbar;

