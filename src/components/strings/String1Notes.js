import React, { useState, useEffect } from 'react';
import Infozone from '../Infozone';
import { createFretboard } from '../../modules/createFretboard';

const fretboard = createFretboard();
const string1 = fretboard[0].props.children;

const handleClick = (event) => {
  console.log(event.target);
};

for (let fret of string1) {
  const newFret = React.cloneElement(fret, 
    {className: `${[fret.props.className]} clickable`, 
    onClick: handleClick, 
    'aria-controls': 'simple-menu', 
    'aria-haspopup': 'true'}, null);
  if (fret.key === '13') {
    const newLastFret = React.createElement('div', {key: fret.key, className: 'note-fret clickable'}, 
      React.createElement('div', {key: fret.key, className: 'double-fretmark'}, ''));
    string1.splice(fret.key - 1, 1, newLastFret); 
  } else {
    string1.splice(fret.key - 1, 1, newFret);
  }
}

const String1Notes = () => {
  
  const [String1Fretboard, setString1Fretboard] = useState(fretboard);
  const [newString1, setNewString1] = useState(string1);

  return (
    <div>
      <div className='fretboard'>
        {String1Fretboard}
      </div>
      <Infozone />
    </div>
  );
}; 

export default String1Notes;