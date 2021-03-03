import React from 'react';
import { createFretboard } from '../modules/createFretboard';

const Fretboard = ({ stringSelected, handleFretClick }) => {
  
  return (
    <div className='fretboard'>
      {createFretboard(stringSelected, handleFretClick)}
    </div>
  );
}; 

export default Fretboard;