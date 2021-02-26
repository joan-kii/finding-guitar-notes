import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles ({
  root: {
    width: '100%',
    background: '#424242',
    position: 'fixed',
    bottom: 0,
    height: '8vh',
  },
  icons: {
    color: '#fff',
  }
});

const Footer = () => {

  const classes = useStyles();

  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction className={classes.icons}
        label='The Odin Project' 
        showLabel={true}
        href='https://www.theodinproject.com'
        target='_blank'
        icon={<BookIcon />} />
      <BottomNavigationAction className={classes.icons}
        label='Credits' 
        showLabel={true}
        href='https://github.com/musicandcode/'
        target='_blank'
        icon={<AssignmentIndIcon />} />
      <BottomNavigationAction className={classes.icons}
        label="Joankii's Repo" 
        showLabel={true}
        href='https://github.com/joan-kii/finding-guitar-notes'
        target='_blank'
        icon={<GitHubIcon />} />
    </BottomNavigation>
  );
}; 

export default Footer;