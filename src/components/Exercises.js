import React, { useState, createContext } from 'react';

export const ExercisesContext = createContext();

const ExercisesContextProvider = (props) => {
  const [actualExercise, setActualExercise] = useState(null);
  const [exercises, setExercises] = useState({
    general: {
      userSigned: false,
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
        completed: false,
        title: 'String 1',
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
        title: 'String 2',
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
        title: 'String 3',
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
        title: 'String 4',
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
        title: 'String 5',
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
        title: 'String 6',
      },
    }, 
    chordExercises: {
      'A': {title: 'Chord A', completed: false},
      'B': {title: 'Chord B', completed: false},
      'C': {title: 'Chord C', completed: false},
      'D': {title: 'Chord D', completed: false},
      'E': {title: 'Chord E', completed: false},
      'F': {title: 'Chord F', completed: false},
      'G': {title: 'Chord G', completed: false},
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

