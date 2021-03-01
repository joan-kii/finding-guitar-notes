import React from 'react';
import { fretboard, createFretboard } from '../modules/createFretboard';

createFretboard();
 
const Fretboard = () => {
  return (
    <div className='fretboard'>
      {fretboard}
    </div>
  );
}; 

export default Fretboard;