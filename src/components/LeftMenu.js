import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const stringPaths = {
  'String 1': '/finding-guitar-notes/notes-string-1',
  'String 2': '/finding-guitar-notes/notes-string-2',
  'String 3': '/finding-guitar-notes/notes-string-3',
  'String 4': '/finding-guitar-notes/notes-string-4',
  'String 5': '/finding-guitar-notes/notes-string-5',
  'String 6': '/finding-guitar-notes/notes-string-6',
};
const chordPaths = {
  'Chord A': '/finding-guitar-notes/chord-a',
  'Chord B': '/finding-guitar-notes/chord-b',
  'Chord C': '/finding-guitar-notes/chord-c',
  'Chord D': '/finding-guitar-notes/chord-d',
  'Chord E': '/finding-guitar-notes/chord-e',
  'Chord F': '/finding-guitar-notes/chord-f',
  'Chord G': '/finding-guitar-notes/chord-g',
};

const drawerWidth = 200;

const useStyles = makeStyles({
  list: {
    width: drawerWidth,
  },
  drawer: {
    display: 'flex',
  },
  chevron: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  type: {
    paddingLeft: 20,
  },
  item: {
    textAlign: 'right',
    paddingRight: 30,
  }
});

const LeftMenu = ( {open, setOpen }) => {

  const classes = useStyles();
  const theme = useTheme();

  const handleClose = () => {
    setOpen(false);
  };

  const strings = [];
  for (let string in stringPaths) {
    strings.push(
      <ListItem 
        button 
        key={string}
        component={Link} 
        to={stringPaths[string]}>
        <ListItemText className={classes.item} >
          {string}
        </ListItemText>
      </ListItem>
    )
  }

  const chords = [];
  for (let chord in chordPaths) {
    chords.push(
      <ListItem 
        button 
        key={chord} 
        component={Link} 
        to={chordPaths[chord]} >
        <ListItemText className={classes.item}>
          {chord}
        </ListItemText>
      </ListItem>
    )
  }

  return (
    <div 
      className={classes.list}
      role='presentation'
      onClick={handleClose}>
      <Drawer 
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <div className={classes.chevron}>
          <IconButton onClick={handleClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List className={classes.list} >
          <ListItemText className={classes.type} >
            Strings
          </ListItemText>
          <Divider />
          {strings}
        </List>
        <Divider />
        <List className={classes.list} >
          <ListItemText className={classes.type}>
            Chords
          </ListItemText>
          <Divider />
          {chords}
        </List>
      </Drawer>
    </div>
  )
};

export default LeftMenu;

