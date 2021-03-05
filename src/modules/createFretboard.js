import React from 'react';

// Create Fretboard

const numberOfStrings = 6;
const numberOfFrets = 13;
const singleFretmarks = [4, 6, 8, 10];
const doubleFretmarks = 13;

const createFretboard = () => {
  const fretboard = [];   
  let string;
  let fret;
  for (let j = 1; j <= numberOfStrings; j++) {
    const frets = [];
    for (let i = 1; i <= numberOfFrets; i++) {
      if (j === 1) {
        if (singleFretmarks.includes(i)) {
          fret = React.createElement('div', {key: i, className: 'note-fret single-fretmark'}, '');
        } else if (i === doubleFretmarks) {
          fret = React.createElement('div', {key: i, className: 'note-fret'}, 
            React.createElement('div', {key: i, className: 'double-fretmark'}, ''));
        } else {
          fret = React.createElement('div', {key: i, className: 'note-fret'}, '');
        }
      } else {
        fret = React.createElement('div', {key: i, className: 'note-fret'}, '');
      }
      frets.push(fret);
    }
    string = React.createElement('div', {key:j, className: `string string${j}`}, frets);
    fretboard.push(string);
  }
  return fretboard;
};

export { createFretboard };