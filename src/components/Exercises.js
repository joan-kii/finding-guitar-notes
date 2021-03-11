import React, { useState, createContext } from 'react';

export const ExercisesContext = createContext();

const ExercisesContextProvider = (props) => {
  const [actualExercise, setActualExercise] = useState(null);
  const [exercises, setExercises] = useState({
    general: {
      userSigned: false,
      allExercisesCompleted: false,
    },
    notesExercises: {
      string_1: {
        'E': {completed: false},
        'F': {completed: false},
        'F#/Gb': {completed: false},
        'G': {completed: false},
        'G#/Ab': {completed: false},
        'A': {completed: false},
        'A#/Bb': {completed: false},
        'B': {completed: false},
        'C': {completed: false},
        'C#/Db': {completed: false},
        'D': {completed: false},
        'D#/Eb': {completed: false},
        'e': {completed: false},
        string_1Completed: {completed: false},
        title: 'Notes String 1',
      },
      string_2: {},
      string_3: {},
      string_4: {},
      string_5: {},
      string_6: {},
      notesExcersisesCompleted: false,
    }, 
    chordExercises: {
      chordExercisesCompleted: false,
      },
  });
  return (
    <ExercisesContext.Provider 
      value={{exercises, setExercises, actualExercise, setActualExercise}}>
      {props.children}
    </ExercisesContext.Provider>
  );
};

export default ExercisesContextProvider;

