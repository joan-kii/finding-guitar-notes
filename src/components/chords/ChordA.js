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

const ChordA = () => {

  const chord = 'A';
  const fretsChordA = ['0', '2', '2', '2', '0'];
  const notesChordA = ['E', 'C#/Db', 'A', 'E', 'A'];
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [rightNotes, setRightNotes] =useState([0, 0, 0, 0, 0]);
  const { exercises, setExercises, setActualExercise } = useContext(ExercisesContext);
  useEffect(() => {
    setActualExercise(exercises.chordExercises[chord].title);
  });

  const handleClick = (event) => {
    const anchorEl = event.target;
    const stringSelected = anchorEl.parentElement.classList[1].slice(-1);
    const fretSelected = anchorEl.id;
    if (fretsChordA[stringSelected - 1] === fretSelected){
      anchorEl.classList.remove('clickable');
      anchorEl.classList.add('correct');
      anchorEl.setAttribute('data-before', notesChordA[stringSelected -1]);
      setRightNotes([0, 0, 0, 0, 1]);
      setShowSuccessMessage(true);
    } else {
      setShowFailMessage(true);
    }
  };
  console.log(rightNotes)
  if (rightNotes === [1, 1, 1, 1, 1])
    setExercises((prevState) => {
      prevState.chordExercises[chord].completed = true;
      return ({...prevState});
    });

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
        notesChord={fretsChordA}
        chord={chord} 
        rightNotes />
    </div>
  );
}; 

export default ChordA;