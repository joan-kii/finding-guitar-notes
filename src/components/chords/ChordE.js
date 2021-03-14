import React, { useState, useContext, useEffect } from 'react';
import { ExercisesContext } from '../Exercises';
import InfozoneChordNotes from '../InfozoneChordNotes';
import { createFretboard } from '../../modules/createFretboard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const isClickable = true;
const fretboard = createFretboard(isClickable);

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
};

const ChordE = () => {

  const chord = 'E';
  const fretsChordE = ['0', '0', '1', '2', '2', '0'];
  const notesChordE = ['E', 'B', 'G#', 'E', 'B', 'B'];
  const [rightNotes, setRightNotes] = useState([0, 0, 0, 0, 0, 0]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const { exercises, setExercises, setActualExercise } = useContext(ExercisesContext);
  useEffect(() => {
    setActualExercise(exercises.chordExercises[chord].title);
  });

  const handleClick = (event) => {
    const anchorEl = event.target;
    const stringSelected = anchorEl.parentElement.classList[1].slice(-1);
    const fretSelected = anchorEl.id;
    if (fretsChordE[stringSelected - 1] === fretSelected) {
      rightNotes[stringSelected - 1] = 1;
      setRightNotes(rightNotes);
      anchorEl.classList.remove('clickable');
      anchorEl.classList.add('correct');
      anchorEl.setAttribute('data-before', notesChordE[stringSelected -1]);
      if (!exercises.chordExercises[chord].completed) setShowSuccessMessage(true);
      if (!rightNotes.includes(0)) {
        setExercises((prevState) => {
          prevState.chordExercises[chord].completed = true;
          return ({...prevState});
        });
      }
    } else {
      if (!exercises.chordExercises[chord].completed) setShowFailMessage(true);
    }
  };

  const closeMessage = () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);
  };

  // Create the exercise fretboard

  for (let string of fretboard) {
    const newString = string.props.children;
    for (let fret of newString) {
      const newFret = React.cloneElement(fret, 
        {id: newString.indexOf(fret), onClick: handleClick}, null);
      newString.splice(newString.indexOf(fret), 1, newFret);
    }
  }

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
        notesChord={fretsChordE}
        chord={chord} 
        rightNotes={rightNotes} />
    </div>
  );
}; 

export default ChordE;