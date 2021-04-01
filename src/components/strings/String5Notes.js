import React, { useState, useContext, useEffect } from 'react';
import { db } from '../../firebase';
import { Context } from '../../context/Context';
import InfozoneStringNotes from '../InfozoneStringNotes';
import Fretboard from '../Fretboard';
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

const String5Notes = () => {

  const classes = useStyles();

  const { string5Exercise, setString5Exercise, setActualExercise, currentUser } = useContext(Context);
  const notesString5 = ['A', 'A#|Bb', 'B', 'C', 'C#|Db', 'D', 'D#|Eb', 'E', 'F', 'F#|Gb', 'G', 'G#|Ab', 'a'];

  const [anchorEl, setAnchorEl] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [rightNotes, setRightNotes] = useState(0);

  if (string5Exercise) {
    setActualExercise(string5Exercise);
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
      setString5Exercise((prevState) => {
        prevState.completed = true;
        if (currentUser) db.collection('users').doc(currentUser.uid).update({
          string5Exercise: {...prevState}
        })
        return ({...prevState});
      })
    }
  }, [rightNotes, setString5Exercise, currentUser]);

  const handleClose = (anchorEl, noteSelected) => {
    
    const note = anchorEl.id;
    if (noteSelected !== 'backdropClick' && note === noteSelected) {
      anchorEl.classList.remove('clickable');
      anchorEl.classList.add('correct');
      anchorEl.setAttribute('data-before', note);
      setString5Exercise((prevState) => {
        prevState[noteSelected].completed = true;
        if (currentUser) db.collection('users').doc(currentUser.uid).update({
          string5Exercise: {...prevState}
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
      const randomNote1 = notesString5[Math.floor(Math.random() * 13)];
      const randomNote2 = notesString5[Math.floor(Math.random() * 13)];
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

  // Create the exercise fretboard

  const isClickable = false;
  const fretboard = createFretboard(isClickable);
  const string5 = fretboard[4].props.children;

  const string5Fretboard = () => {
    for (let fret of string5) {
      const newFret = React.cloneElement(fret, 
        {id: notesString5[string5.indexOf(fret)], className: `${[fret.props.className]} clickable`, 
        onClick: handleClick, 
        'aria-controls': 'simple-menu', 
        'aria-haspopup': 'true'}, null);
      string5.splice(string5.indexOf(fret), 1, newFret);
    }
    return fretboard;
  };

  return (
    <div>
      <div className='fretboard'>
        <Fretboard fretboard={string5Fretboard} />
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
        notesString={notesString5}
        string={string5Exercise} />
      <Backdrop 
        className={classes.backdrop}
        open={!string5Exercise} 
        close={string5Exercise} >
        <CircularProgress 
          color='inherit'
          thickness='6' />
      </Backdrop>
    </div>
  );
}; 

export default String5Notes;