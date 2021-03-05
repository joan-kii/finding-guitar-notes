import React from 'react';
import { createFretboard } from '../modules/createFretboard';

const Fretboard = () => {

  return (
    <div className='fretboard'>
      {createFretboard()}
    </div>
  );
}; 

export default Fretboard;