import React, { useState, useContext, useEffect } from 'react';
import { ExercisesContext } from '../Exercises';
import InfozoneStringNotes from '../InfozoneStringNotes';
import { createFretboard } from '../../modules/createFretboard';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const isClickable = false;
const fretboard = createFretboard(isClickable);
const string2 = fretboard[1].props.children;

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
};

const String2Notes = () => {

  const notesString2 = ['B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'b'];
  const { exercises, setExercises, setActualExercise } = useContext(ExercisesContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [rightNotes, setRightNotes] = useState(0);


  useEffect(() => {
    setActualExercise(exercises.notesExercises.string_2.title);
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
       setExercises((prevState) => {
        prevState.notesExercises.string_2.completed = true;
        return ({...prevState});
      })
    }
  }, [rightNotes, setExercises]);

  const handleClose = (anchorEl, noteSelected) => {
    
    const note = anchorEl.id;
    if (noteSelected !== 'backdropClick' && note === noteSelected) {
      anchorEl.classList.remove('clickable');
      anchorEl.classList.add('correct');
      anchorEl.setAttribute('data-before', note);
      setExercises((prevState) => {
        prevState.notesExercises.string_2[noteSelected].completed = true;
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
      const randomNote1 = notesString2[Math.floor(Math.random() * 13)];
      const randomNote2 = notesString2[Math.floor(Math.random() * 13)];
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

  for (let fret of string2) {
    const newFret = React.cloneElement(fret, 
      {id: notesString2[string2.indexOf(fret)], className: `${[fret.props.className]} clickable`, 
      onClick: handleClick, 
      'aria-controls': 'simple-menu', 
      'aria-haspopup': 'true'}, null);
      string2.splice(string2.indexOf(fret), 1, newFret);
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
              onClick={(event) => handleClose(anchorEl, event.target.textContent)}>
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
        notesString={notesString2}
        string= 'string_2' />
    </div>
  );
}; 

export default String2Notes;