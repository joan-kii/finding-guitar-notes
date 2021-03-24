import React, { useEffect, useContext } from 'react';
import { Context } from '../context/Context';


const Fretboard = ({ fretboard }) => {
  
  const { reset, setReset } = useContext(Context);
  
  useEffect(() => {
    setReset(true);
  }, [setReset, reset])

  return (
    <div  className='fretboard'>
      {reset && fretboard()}
    </div>
  )
};

export default Fretboard;

