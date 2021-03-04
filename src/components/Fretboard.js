import React from 'react';
import { createFretboard } from '../modules/createFretboard';

const Fretboard = ({ stringSelected, handleFretClick, noteChoices }) => {
  console.log(noteChoices)
  return (
    <div className='fretboard'>
      {createFretboard(stringSelected, handleFretClick)}
      {noteChoices}
    </div>
  );
}; 

export default Fretboard;