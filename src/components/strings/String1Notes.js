import React, { useState, useContext } from 'react';
import { ExercisesContext } from '../Exercises';
import Infozone from '../Infozone';
import { createFretboard } from '../../modules/createFretboard';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const fretboard = createFretboard();
const string1 = fretboard[0].props.children;

const String1Notes = () => {

  const { exercises, setExercises } = useContext(ExercisesContext);
  const notesString1 = ['E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'e'];
  const [string1Fretboard, setString1Fretboard] = useState(fretboard);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.target);
  };
  const handleClose = (note, noteSelected) => {
    console.log(note === noteSelected)
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
        {string1Fretboard}
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
      </div>
      <Infozone />
    </div>
  );
}; 

export default String1Notes;