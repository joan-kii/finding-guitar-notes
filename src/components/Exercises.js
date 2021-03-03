import React, { useState, createContext } from 'react';

export const ExercisesContext = createContext();

const ExercisesContextProvider = (props) => {
  const [exercises, setExercises] = useState([
    {
      userSigned: false,
      allExercisesCompleted: false,
      notes: ['A', 'A#-Bb', 'B', 'C', 'C#-Db', 'D', 'D#-Eb', 'E', 'F', 'F#-Gb', 'G', 'G#-Ab']
    },
    {
      notesExercises: {
        string_1: {
          0: {completed: false, note: 'E'},
          1: {completed: false, note: 'F'},
          2: {completed: false, note: 'F#-Gb'},
          3: {completed: false, note: 'G'},
          4: {completed: false, note: 'G#-Ab'},
          5: {completed: false, note: 'A'},
          6: {completed: false, note: 'A#-Bb'},
          7: {completed: false, note: 'B'},
          8: {completed: false, note: 'C'},
          9: {completed: false, note: 'C#-Db'},
          10: {completed: false, note: 'D'},
          11: {completed: false, note: 'D#-Eb'},
          string_1Completed: false
        },
        string_2: {

        },
        string_3: {

        },
        string_4: {

        },
        string_5: {

        },
        string_6: {

        },
        notesExcersisesCompleted: false,
      }
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

