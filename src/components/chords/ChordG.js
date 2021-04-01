import React, { useState, useContext, useEffect } from 'react';
import { db } from '../../firebase';
import { Context } from '../../context/Context';
import Fretboard from '../Fretboard';
import InfozoneChordNotes from '../InfozoneChordNotes';
import { createFretboard } from '../../modules/createFretboard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
};

const ChordG = () => {

  const chord = 'G';
  const fretsChordG = ['3', '3', '0', '0', '2', '3'];
  const notesChordG = ['G', 'D', 'G', 'D', 'B', 'G'];
  const [rightNotes, setRightNotes] = useState([0, 0, 0, 0, 0, 0]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const { exercises, setExercises, setActualExercise, reset, currentUser } = useContext(Context);

  if (exercises) {
    setActualExercise(exercises[chord]);
  }

  useEffect(() => {
    setRightNotes([0, 0, 0, 0, 0, 0]);
  }, [reset])

  const handleClick = (event) => {
    const anchorEl = event.target;
    const stringSelected = anchorEl.parentElement.classList[1].slice(-1);
    const fretSelected = anchorEl.id;
    if (fretsChordG[stringSelected - 1] === fretSelected) {
      rightNotes[stringSelected - 1] = 1;
      setRightNotes(rightNotes);
      anchorEl.classList.remove('clickable');
      anchorEl.classList.add('correct');
      anchorEl.setAttribute('data-before', notesChordG[stringSelected -1]);
      if (!exercises[chord].completed) setShowSuccessMessage(true);
      if (!rightNotes.includes(0)) {
        setExercises((prevState) => {
          prevState[chord].completed = true;
          if (currentUser) db.collection('users').doc(currentUser.uid).update({
            exercises: {...prevState}
          })
          return ({...prevState});
        });
      }
    } else {
      if (!exercises[chord].completed) setShowFailMessage(true);
    }
  };

  const closeMessage = () => {
    setShowSuccessMessage(false);
    setShowFailMessage(false);
  };

  // Create the exercise fretboard

  const isClickable = true;
  const fretboard = createFretboard(isClickable);

  const chordGFretboard = () => {
    for (let string of fretboard) {
      const newString = string.props.children;
      for (let fret of newString) {
        const newFret = React.cloneElement(fret, 
          {id: newString.indexOf(fret), onClick: handleClick}, null);
        if (fret.key === '13' && string.key === '1') {
          const newLastFret = React.createElement('div', {id: newString.indexOf(fret), 
            key: fret.key, className: 'note-fret clickable', onClick: handleClick}, 
            React.createElement('div', {key: fret.key, className: 'double-fretmark'}, ''));
          newString.splice(newString.indexOf(fret), 1, newLastFret);
        } else {
          newString.splice(newString.indexOf(fret), 1, newFret);
        }
      }
    }
    return fretboard;
  };

  return (
    <div>
      <div>
        <Fretboard fretboard={chordGFretboard} />
        <Snackbar open={showSuccessMessage} autoHideDuration={2000} onClose={closeMessage}>
            <Alert severity='success'>That's right!</Alert>
        </Snackbar>
        <Snackbar open={showFailMessage} autoHideDuration={2000} onClose={closeMessage}>
          <Alert severity='error'>Try again</Alert>
        </Snackbar>
      </div>
      <InfozoneChordNotes 
        notesChord={fretsChordG}
        chord={chord} 
        rightNotes={rightNotes} />
    </div>
  );
}; 

export default ChordG;