import React, { useState, createContext } from 'react';

export const ExercisesContext = createContext();

const ExercisesContextProvider = (props) => {

  const [reset, setReset] = useState(true);
  const resetExercise = (exercise) => {
    setReset(false);
    for (let note in exercise) {
      if (note !== 'completed' && note !== 'title' && exercise.title === 'String 1') {
        setString1Exercise((prevState) => {
          prevState[note].completed = false;
          prevState.completed = false;
          return ({...prevState});
        }) 
      } else if (note !== 'completed' && note !== 'title' && exercise.title === 'String 2') {
        setString2Exercise((prevState) => {
          prevState[note].completed = false;
          prevState.completed = false;
          return ({...prevState});
        })
      } else if (note !== 'completed' && note !== 'title' && exercise.title === 'String 3') {
        setString3Exercise((prevState) => {
          prevState[note].completed = false;
          prevState.completed = false;
          return ({...prevState});
        })
      } else if (note !== 'completed' && note !== 'title' && exercise.title === 'String 4') {
        setString4Exercise((prevState) => {
          prevState[note].completed = false;
          prevState.completed = false;
          return ({...prevState});
        })
      } else if (note !== 'completed' && note !== 'title' && exercise.title === 'String 5') {
        setString5Exercise((prevState) => {
          prevState[note].completed = false;
          prevState.completed = false;
          return ({...prevState});
        })
      } else if (note !== 'completed' && note !== 'title' && exercise.title === 'String 6') {
        setString6Exercise((prevState) => {
          prevState[note].completed = false;
          prevState.completed = false;
          return ({...prevState});
        })
      }
    }
  };

  const [actualExercise, setActualExercise] = useState('');
  const [choiceMenu, setChoiceMenu] = useState('');
  const [userSigned, setUserSigned] = useState(false);

  const [string1Exercise, setString1Exercise] = useState({
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
  });
  const [string2Exercise, setString2Exercise] = useState({
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
    completed: false,
    title: 'String 2'
  });
  const [string3Exercise, setString3Exercise] = useState({
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
    completed: false,
    title: 'String 3'
  });
  const [string4Exercise, setString4Exercise] = useState({
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
    completed: false,
    title: 'String 4'
  });
  const [string5Exercise, setString5Exercise] = useState({
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
    completed: false,
    title: 'String 5'
  });
  const [string6Exercise, setString6Exercise] = useState({
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
    title: 'String 6'
  });

  const [exercises, setExercises] = useState({
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
      value={{exercises, setExercises, 
        actualExercise, setActualExercise, 
        resetExercise, choiceMenu, setChoiceMenu, 
        string1Exercise, setString1Exercise,
        string2Exercise, setString2Exercise,
        string3Exercise, setString3Exercise,
        string4Exercise, setString4Exercise,
        string5Exercise, setString5Exercise,
        string6Exercise, setString6Exercise,
        reset, setReset}}>
      {props.children}
    </ExercisesContext.Provider>
  );
};

export default ExercisesContextProvider;

