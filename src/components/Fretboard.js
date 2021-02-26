import React from 'react';
import Infozone from './Infozone';

const Fretboard = ({ fretboard }) => {
  return (
    <div className='fretboard'>
      {fretboard}
      <Infozone />
    </div>
  );
}; 

export default Fretboard;