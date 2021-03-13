import React, { useState, useContext, useEffect } from 'react';
import { ExercisesContext } from '../Exercises';
import InfozoneChordNotes from '../InfozoneChordNotes';
import { createFretboard } from '../../modules/createFretboard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const fretboard = createFretboard();

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
};

const ChordD = () => {

  const chord = 'A';
  const notesChordA = [0, 2, 2, 2, 0];
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const { exercises, setExercises, setActualExercise } = useContext(ExercisesContext);
  useEffect(() => {
    setActualExercise(exercises.chordExercises[chord].title);
  });

  const handleClose = (anchorEl, noteSelected) => {
    
    const note = anchorEl.id;
    if (noteSelected !== 'backdropClick' && note === noteSelected) {
      anchorEl.classList.remove('clickable');
      anchorEl.classList.add('correct');
      anchorEl.setAttribute('data-before', note);
      setExercises((prevState) => {
        prevState.chordExercises[chord].completed = true;
        return ({...prevState});
      });
      setShowSuccessMessage(true);
    } else {
      setShowFailMessage(true);
    }
    setAnchorEl(null);
  };

  const closeMessage = () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);
  };

  return (
    <div>
      <div className='fretboard'>
        {fretboard}
        <Snackbar open={showSuccessMessage} autoHideDuration={2000} onClose={closeMessage}>
            <Alert severity='success'>That's rigth!</Alert>
          </Snackbar>
          <Snackbar open={showFailMessage} autoHideDuration={2000} onClose={closeMessage}>
            <Alert severity='error'>Try again</Alert>
          </Snackbar>
      </div>
      <InfozoneChordNotes 
        notesChord={notesChordA}
        chord={chord} />
    </div>
  );
}; 

export default ChordD;