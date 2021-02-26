import React from 'react';
import Topbar from './components/Topbar';
import Fretboard from './components/Fretboard';
import Infozone from './components/Infozone';
import Footer from './components/Footer';

// Create Fretboard

const numberOfStrings = 6;
const numberOfFrets = 12;
const singleFretmarks = [3, 5, 7, 9];
const doubleFretmarks = 12;

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
          fret = React.createElement('div', {key: i, className: 'note-fret double-fretmark'}, '');
        } else {
          fret = React.createElement('div', {key: i, className: 'note-fret'}, '');
        }
      } else {
        fret = React.createElement('div', {key: i, className: 'note-fret'}, '');
      }
      frets.push(fret);
    }
    string = React.createElement('div', {key:j, className:'string'}, frets);
    fretboard.push(string);
  }
};

createFretboard();

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <Fretboard />
      <Infozone />
      <Footer />
    </div>
  );
};

export default App;

