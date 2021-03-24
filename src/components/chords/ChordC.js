import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context/Context';
import InfozoneChordNotes from '../InfozoneChordNotes';
import Fretboard from '../Fretboard';
import { createFretboard } from '../../modules/createFretboard';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
};

const ChordC = () => {

  const chord = 'C';
  const fretsChordC = ['0', '1', '0', '2', '3'];
  const notesChordC = ['E', 'C', 'G', 'E', 'C'];
  const [rightNotes, setRightNotes] = useState([0, 0, 0, 0, 0]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const { exercises, setExercises, setActualExercise, reset } = useContext(Context);

  useEffect(() => {
    setActualExercise(exercises[chord]);
  });

  useEffect(() => {
    setRightNotes([0, 0, 0, 0, 0]);
  }, [reset])

  const handleClick = (event) => {
    const anchorEl = event.target;
    const stringSelected = anchorEl.parentElement.classList[1].slice(-1);
    const fretSelected = anchorEl.id;
    if (fretsChordC[stringSelected - 1] === fretSelected) {
      rightNotes[stringSelected - 1] = 1;
      setRightNotes(rightNotes);
      anchorEl.classList.remove('clickable');
      anchorEl.classList.add('correct');
      anchorEl.setAttribute('data-before', notesChordC[stringSelected -1]);
      if (!exercises[chord].completed) setShowSuccessMessage(true);
      if (!rightNotes.includes(0)) {
        setExercises((prevState) => {
          prevState[chord].completed = true;
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

  const chordCFretboard = () => {
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
        <Fretboard fretboard={chordCFretboard} />
        <Snackbar open={showSuccessMessage} autoHideDuration={2000} onClose={closeMessage}>
            <Alert severity='success'>That's right!</Alert>
        </Snackbar>
        <Snackbar open={showFailMessage} autoHideDuration={2000} onClose={closeMessage}>
          <Alert severity='error'>Try again</Alert>
        </Snackbar>
      </div>
      <InfozoneChordNotes 
        notesChord={fretsChordC}
        chord={chord} 
        rightNotes={rightNotes} />
    </div>
  );
}; 

export default ChordC;