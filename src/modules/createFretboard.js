import React from 'react';

// Create Fretboard

const numberOfStrings = 6;
const numberOfFrets = 13;
const singleFretmarks = [4, 6, 8, 10];
const doubleFretmarks = 13;

const createFretboard = (isClickable) => {
  const fretClassName = isClickable ? 'note-fret clickable' : 'note-fret';
  const singleFretmarkClassName = isClickable ? 'note-fret single-fretmark clickable ' : 'note-fret single-fretmark';
  const fretboard = [];   
  let string;
  let fret;
  for (let j = 1; j <= numberOfStrings; j++) {
    const frets = [];
    for (let i = 1; i <= numberOfFrets; i++) {
      if (j === 1) {
        if (singleFretmarks.includes(i)) {
          fret = React.createElement('div', {key: i, className: singleFretmarkClassName}, '');
        } else if (i === doubleFretmarks) {
          fret = React.createElement('div', {key: i, className: fretClassName}, 
            React.createElement('div', {key: i, className: 'double-fretmark'}, ''));
        } else {
          fret = React.createElement('div', {key: i, className: fretClassName}, '');
        }
      } else {
        fret = React.createElement('div', {key: i, className: fretClassName}, '');
      }
      frets.push(fret);
    }
    string = React.createElement('div', {key:j, className: `string string${j}`}, frets);
    fretboard.push(string);
  }
  return fretboard;
};

export { createFretboard };