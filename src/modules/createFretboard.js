import React from 'react';

// Create Fretboard

const numberOfStrings = 6;
const numberOfFrets = 13;
const singleFretmarks = [4, 6, 8, 10];
const doubleFretmarks = 13;

const createFretboard = (stringSelected, handleFretClick) => {
  const fretboard = [];   
  console.log(stringSelected)
  let string;
  let fret;
  for (let j = 1; j <= numberOfStrings; j++) {
    const frets = [];
    for (let i = 1; i <= numberOfFrets; i++) {
      if (j === 1) {
        if (singleFretmarks.includes(i)) {
          fret = React.createElement('div', {key: i, className: 'note-fret single-fretmark', onClick: handleFretClick}, '');
        } else if (i === doubleFretmarks) {
          fret = React.createElement('div', {key: i, className: 'note-fret', onClick: handleFretClick}, 
            React.createElement('div', {key: i, className: 'double-fretmark', onClick: handleFretClick}, ''));
        } else {
          fret = React.createElement('div', {key: i, className: 'note-fret', onClick: handleFretClick}, '');
        }
      } else {
        fret = React.createElement('div', {key: i, className: 'note-fret', onClick: handleFretClick}, '');
      }
      frets.push(fret);
    }
    string = React.createElement('div', {key:j, className: `string string${j}`}, frets);
    fretboard.push(string);
  }
  return fretboard;
};

export { createFretboard };