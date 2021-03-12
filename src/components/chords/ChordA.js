import React from 'react';
import Fretboard from './Fretboard';
import InfozoneChordNotes from './InfozoneChordNotes';

const Chords = () => {
  return (
    <div>
      <Fretboard />
      <InfozoneChordNotes chord='E' />
    </div>
  );
}; 

export default Chords;