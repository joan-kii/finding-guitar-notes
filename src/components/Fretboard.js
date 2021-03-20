import React, { useState, useEffect, useContext } from 'react';
import { ExercisesContext } from './Exercises';


const Fretboard = ({ fretboard }) => {
  
  const { reset } = useContext(ExercisesContext);
  const [renderFretboard, setRenderFretboard] = useState(fretboard());
  useEffect(() => {setRenderFretboard(fretboard())}, [reset])

  return (
    <div  className='fretboard'>
      {renderFretboard}
    </div>
  )
};

export default Fretboard;

