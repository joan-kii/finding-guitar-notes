import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import InfozoneStringNotes from '../InfozoneStringNotes';
import Fretboard from '../Fretboard';
import { createFretboard } from '../../modules/createFretboard';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
};

const String6Notes = () => {

  const { string6Exercise, setString6Exercise, setActualExercise } = useContext(Context);
  const notesString6 = ['E', 'F', 'F#|Gb', 'G', 'G#|Ab', 'A', 'A#|Bb', 'B', 'C', 'C#|Db', 'D', 'D#|Eb', 'e'];

  const [anchorEl, setAnchorEl] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [rightNotes, setRightNotes] = useState(0);


  useEffect(() => {
    setActualExercise(string6Exercise);
  });

  const closeMessage = () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  useEffect(() => {
    if (rightNotes === 13) {
      setString6Exercise((prevState) => {
        prevState.completed = true;
        return ({...prevState});
      })
    }
  }, [rightNotes, setString6Exercise]);

  const handleClose = (anchorEl, noteSelected) => {
    
    const note = anchorEl.id;
    if (noteSelected !== 'backdropClick' && note === noteSelected) {
      anchorEl.classList.remove('clickable');
      anchorEl.classList.add('correct');
      anchorEl.setAttribute('data-before', note);
      setString6Exercise((prevState) => {
        prevState[noteSelected].completed = true;
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
      const randomNote1 = notesString6[Math.floor(Math.random() * 13)];
      const randomNote2 = notesString6[Math.floor(Math.random() * 13)];
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
  const string6 = fretboard[5].props.children;

  const string6Fretboard = () => {
    for (let fret of string6) {
      const newFret = React.cloneElement(fret, 
        {id: notesString6[string6.indexOf(fret)], className: `${[fret.props.className]} clickable`, 
        onClick: handleClick, 
        'aria-controls': 'simple-menu', 
        'aria-haspopup': 'true'}, null);
      string6.splice(string6.indexOf(fret), 1, newFret);
    }
    return fretboard;
  };

  return (
    <div>
      <div className='fretboard'>
        <Fretboard fretboard={string6Fretboard} />
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
        notesString={notesString6}
        string={string6Exercise} />
    </div>
  );
}; 

export default String6Notes;