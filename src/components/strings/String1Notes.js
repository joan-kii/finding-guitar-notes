import React, { useState, useContext, useEffect } from 'react';
import { db } from '../../firebase';
import { Context } from '../../context/Context';
import Fretboard from '../Fretboard';
import InfozoneStringNotes from '../InfozoneStringNotes';
import { createFretboard } from '../../modules/createFretboard';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer +1,
    color: 'white',
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
};

const String1Notes = () => {

  const classes = useStyles();

  const { string1Exercise, setString1Exercise, setActualExercise, currentUser } = useContext(Context);
  const notesString1 = ['E', 'F', 'F#|Gb', 'G', 'G#|Ab', 'A', 'A#|Bb', 'B', 'C', 'C#|Db', 'D', 'D#|Eb', 'e'];

  const [anchorEl, setAnchorEl] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [rightNotes, setRightNotes] = useState(0);

  if (string1Exercise) {
    setActualExercise(string1Exercise);
  }

  const closeMessage = () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  useEffect(() => {
    if (rightNotes === 13) {
      setString1Exercise((prevState) => {
        prevState.completed = true;
        if (currentUser) db.collection('users').doc(currentUser.uid).update({
          string1Exercise: {...prevState}
        })
        return ({...prevState});
      })
    }
  }, [rightNotes, setString1Exercise, currentUser]);

  const handleClose = (anchorEl, noteSelected) => {
    const note = anchorEl.id;
    if (noteSelected !== 'backdropClick' && note === noteSelected) {
      anchorEl.classList.remove('clickable');
      anchorEl.classList.add('correct');
      anchorEl.setAttribute('data-before', note);
      setString1Exercise((prevState) => {
        prevState[noteSelected].completed = true;
        if (currentUser) db.collection('users').doc(currentUser.uid).update({
          string1Exercise: {...prevState}
        })
        return ({...prevState});
      });
      setRightNotes(rightNotes + 1);
      setShowSuccessMessage(true);
    } else {
      setShowFailMessage(true);
    }
    setAnchorEl(null);
  };

  // Ramdom choice notes
  
  const optionNotes = (anchorEl) => {
    if (anchorEl) {
      const randomNote1 = notesString1[Math.floor(Math.random() * 13)];
      const randomNote2 = notesString1[Math.floor(Math.random() * 13)];
      if (randomNote1 !== randomNote2 && randomNote1 !== anchorEl.id && randomNote2 !== anchorEl.id) {
        const options = [anchorEl.id];
        options.push(randomNote1);
        options.push(randomNote2);
        return options.sort();
      } else {
        return optionNotes(anchorEl);
      }
    } else {
      return [];
    }
  };

  // Create the exercise fretboard string 1

  const isClickable = false;
  const fretboard = createFretboard(isClickable);
  const string1 = fretboard[0].props.children;
  
  const string1Fretboard = () => {
    for (let fret of string1) {
      const newFret = React.cloneElement(fret, 
        {id: notesString1[string1.indexOf(fret)], className: `${[fret.props.className]} clickable`, 
        onClick: handleClick, 
        'aria-controls': 'simple-menu', 
        'aria-haspopup': 'true'}, null);
      if (fret.key === '13') {
        const newLastFret = React.createElement('div', {id: notesString1[string1.indexOf(fret)], 
          key: fret.key, className: 'note-fret clickable', onClick: handleClick}, 
          React.createElement('div', {key: fret.key, className: 'double-fretmark'}, ''));
        string1.splice(string1.indexOf(fret), 1, newLastFret); 
      } else {
        string1.splice(string1.indexOf(fret), 1, newFret);
      }
    }
    return fretboard;
  };
  

  return (
    <div>
      <div>
        <Fretboard fretboard={string1Fretboard} />
        <Menu 
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose} 
          >
          {optionNotes(anchorEl).map((note) => (
            <MenuItem 
              key={note}
              onClick={(event) => handleClose(anchorEl, event.target.textContent)}>
                {note}
            </MenuItem>
          ))}
        </Menu>
        <Snackbar open={showSuccessMessage} autoHideDuration={2000} onClose={closeMessage}>
          <Alert severity='success'>That's right!</Alert>
        </Snackbar>
        <Snackbar open={showFailMessage} autoHideDuration={2000} onClose={closeMessage}>
          <Alert severity='error'>Try again</Alert>
        </Snackbar>
      </div>
      <InfozoneStringNotes 
        notesString={notesString1}
        string={string1Exercise} />
      <Backdrop 
        className={classes.backdrop}
        open={!string1Exercise} 
        close={string1Exercise} >
        <CircularProgress 
          color='inherit'
          thickness='6' />
      </Backdrop>
    </div>
  );
}; 

export default String1Notes;