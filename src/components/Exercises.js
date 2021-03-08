import React, { useState, createContext } from 'react';

export const ExercisesContext = createContext();

const ExercisesContextProvider = (props) => {
  const [exercises, setExercises] = useState([
    {
      userSigned: false,
      allExercisesCompleted: false,
    },
    {
      string_1: [
        {fret: 0, completed: false, note: 'E'},
        {fret: 1, completed: false, note: 'F'},
        {fret: 2, completed: false, note: 'F#/Gb'},
        {fret: 3, completed: false, note: 'G'},
        {fret: 4, completed: false, note: 'G#/Ab'},
        {fret: 5, completed: false, note: 'A'},
        {fret: 6, completed: false, note: 'A#/Bb'},
        {fret: 7, completed: false, note: 'B'},
        {fret: 8, completed: false, note: 'C'},
        {fret: 9, completed: false, note: 'C#/Db'},
        {fret: 10, completed: false, note: 'D'},
        {fret: 11, completed: false, note: 'D#/Eb'},
        {fret: 12, completed: false, note: 'e'},
        {string_1Completed: false},
      ],
      string_2: [

      ],
      string_3: [

      ],
      string_4: [

      ],
      string_5: [

      ],
      string_6: [
        
      ],
      notesExcersisesCompleted: false,
    }, 
    {
      chordExercises: {
        chordExercisesCompleted: false,

      }
    }
  ]);
  return (
    <ExercisesContext.Provider value={{exercises, setExercises}}>
      {props.children}
    </ExercisesContext.Provider>
  );
};

export default ExercisesContextProvider;

