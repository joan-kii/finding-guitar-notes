import React, { useEffect, useContext } from 'react';
import { ExercisesContext } from './Exercises';


const Fretboard = ({ fretboard }) => {
  
  const { reset, setReset } = useContext(ExercisesContext);
  
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

