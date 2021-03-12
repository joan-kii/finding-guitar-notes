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
      string_2: {
        'B': {completed: false},
        'C': {completed: false},
        'C#/Db': {completed: false},
        'D': {completed: false},
        'D#/Eb': {completed: false},
        'E': {completed: false},
        'F': {completed: false},
        'F#/Gb': {completed: false},
        'G': {completed: false},
        'G#/Ab': {completed: false},
        'A': {completed: false},
        'A#/Bb': {completed: false},
        'b': {completed: false},
        string_2Completed: {completed: false},
        title: 'Notes String 2',
      },
      string_3: {
        'G': {completed: false},
        'G#/Ab': {completed: false},
        'A': {completed: false},
        'A#/Bb': {completed: false},
        'B': {completed: false},
        'C': {completed: false},
        'C#/Db': {completed: false},
        'D': {completed: false},
        'D#/Eb': {completed: false},
        'E': {completed: false},
        'F': {completed: false},
        'F#/Gb': {completed: false},
        'g': {completed: false},
        string_3Completed: {completed: false},
        title: 'Notes String 3',
      },
      string_4: {
        'D': {completed: false},
        'D#/Eb': {completed: false},
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
        'd': {completed: false},
        string_4Completed: {completed: false},
        title: 'Notes String 4',
      },
      string_5: {
        'A': {completed: false},
        'A#/Bb': {completed: false},
        'B': {completed: false},
        'C': {completed: false},
        'C#/Db': {completed: false},
        'D': {completed: false},
        'D#/Eb': {completed: false},
        'E': {completed: false},
        'F': {completed: false},
        'F#/Gb': {completed: false},
        'G': {completed: false},
        'G#/Ab': {completed: false},
        'a': {completed: false},
        string_5Completed: {completed: false},
        title: 'Notes String 5',
      },
      string_6: {
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
        string_6Completed: {completed: false},
        title: 'Notes String 6',
      },
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

