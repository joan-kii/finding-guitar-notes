import React, { useState, useContext } from 'react';
import { ExercisesContext } from '../Exercises';
import InfozoneStringNotes from '../InfozoneStringNotes';
import { createFretboard } from '../../modules/createFretboard';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const fretboard = createFretboard();
const string1 = fretboard[0].props.children;

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
};

const String1Notes = () => {

  const notesString1 = ['E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'e'];
  const { exercises, setExercises, setActualExercise } = useContext(ExercisesContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);

  setActualExercise(exercises.notesExercises.string_1.title);
  
  const closeMessage = () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.target);
  };

  const handleClose = (note, noteSelected) => {
    if (noteSelected !== 'backdropClick' && note === noteSelected) {
      setExercises((prevState) => {
        prevState.notesExercises.string_1[noteSelected].completed = true;
        return ({...prevState});
      });
      setShowSuccessMessage(true);
    } else {
      setShowFailMessage(true);
    }
    setAnchorEl(null);
  };

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

  // Create the exercise fretboard

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

  return (
    <div>
      <div className='fretboard'>
        {fretboard}
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
              onClick={(event) => handleClose(anchorEl.id, event.target.textContent)}>
                {note}
            </MenuItem>
          ))}
        </Menu>
        <Snackbar open={showSuccessMessage} autoHideDuration={2000} onClose={closeMessage}>
          <Alert severity='success'>That's rigth!</Alert>
        </Snackbar>
        <Snackbar open={showFailMessage} autoHideDuration={2000} onClose={closeMessage}>
          <Alert severity='error'>Try again</Alert>
        </Snackbar>
      </div>
      <InfozoneStringNotes 
        notesString={notesString1}
        string= 'string_1' />
    </div>
  );
}; 

export default String1Notes;