import React, { useContext } from 'react';
import { ExercisesContext } from '../Exercises';
import Fretboard from '../Fretboard';
import Infozone from '../Infozone';

const String1Notes = () => {

  const { exercises } = useContext(ExercisesContext);

  const handleFretClick = (event) => {
    if (event.target.parentNode.classList.contains('string1')) {
      console.log(event.target.parentNode.className);
    }
  };
  return (
    <div>
      <Fretboard 
        stringSelected='1' 
        handleFretClick={handleFretClick}/>
      <Infozone />
    </div>
  );
}; 

export default String1Notes;