import React, { useState, createContext, useContext, useEffect } from 'react';
import firebase from 'firebase/app';
import { auth, db } from '../firebase';

export const Context = createContext();
export const useAuth = () => {
  return useContext(Context);
};

const ContextProvider = (props) => {

  const [reset, setReset] = useState(true);
  const [actualExercise, setActualExercise] = useState('');
  const [choiceMenu, setChoiceMenu] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password).then((cred) => {
      return db.collection('users').doc(cred.user.uid).set({
        string1Exercise: {...string1Exercise},
        string2Exercise: {...string2Exercise},
        string3Exercise: {...string3Exercise},
        string4Exercise: {...string4Exercise},
        string5Exercise: {...string5Exercise},
        string6Exercise: {...string6Exercise},
        exercises: {...exercises},
      })
    });
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password).then((cred) => {
      return db.collection('users').doc(cred.user.uid).get().then((track) => {
        setString1Exercise(track.data().string1Exercise);
        setString2Exercise(track.data().string2Exercise);
        setString3Exercise(track.data().string3Exercise);
        setString4Exercise(track.data().string4Exercise);
        setString5Exercise(track.data().string5Exercise);
        setString6Exercise(track.data().string6Exercise);
        setExercises(track.data().exercises);
      });
    });
  };

  const logout = () => {
    return auth.signOut();
  };

  const googleSignup = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return auth.signInWithPopup(provider).then((cred) => {
      return db.collection('users').doc(cred.user.uid).set({
        string1Exercise: {...string1Exercise},
        string2Exercise: {...string2Exercise},
        string3Exercise: {...string3Exercise},
        string4Exercise: {...string4Exercise},
        string5Exercise: {...string5Exercise},
        string6Exercise: {...string6Exercise},
        exercises: {...exercises},
      })
    });
  };

  const githubSignup = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return auth.signInWithPopup(provider).then((cred) => {
      return db.collection('users').doc(cred.user.uid).set({
        string1Exercise: {...string1Exercise},
        string2Exercise: {...string2Exercise},
        string3Exercise: {...string3Exercise},
        string4Exercise: {...string4Exercise},
        string5Exercise: {...string5Exercise},
        string6Exercise: {...string6Exercise},
        exercises: {...exercises},
      })
    });
  };

 auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    });

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
      } else if (Object.keys(exercise).length === 2) {
        setExercises((prevState) => {
          prevState[exercise.title.slice(-1)].completed = false;
          return ({...prevState});
        })
      }
    }
  };

  // Get exercises from Firestore

  const [exercises, setExercises] = useState();
  const [string1Exercise, setString1Exercise] = useState();
  const [string2Exercise, setString2Exercise] = useState();
  const [string3Exercise, setString3Exercise] = useState();
  const [string4Exercise, setString4Exercise] = useState();
  const [string5Exercise, setString5Exercise] = useState();
  const [string6Exercise, setString6Exercise] = useState();

  useEffect(() => {
    if (!currentUser) {
      const unsubscribe = db.collection('exercises').get().then((snapshot) => {
        snapshot.forEach((exercise) => {
          if (exercise.id === 'exercises') {
            setExercises(exercise.data())
          } else if (exercise.id === 'string1Exercise') {
            setString1Exercise(exercise.data())
          } else if (exercise.id === 'string2Exercise') {
            setString2Exercise(exercise.data())
          } else if (exercise.id === 'string3Exercise') {
            setString3Exercise(exercise.data())
          } else if (exercise.id === 'string4Exercise') {
            setString4Exercise(exercise.data())
          } else if (exercise.id === 'string5Exercise') {
            setString5Exercise(exercise.data())
          } else if (exercise.id === 'string6Exercise') {
            setString6Exercise(exercise.data())
          }
        });
      }).catch((err) => console.log(err.message))
      return unsubscribe;
    }
  }, [])

  /* const [string1Exercise, setString1Exercise] = useState({
    'E': {completed: false},
    'F': {completed: false},
    'F#|Gb': {completed: false},
    'G': {completed: false},
    'G#|Ab': {completed: false},
    'A': {completed: false},
    'A#|Bb': {completed: false},
    'B': {completed: false},
    'C': {completed: false},
    'C#|Db': {completed: false},
    'D': {completed: false},
    'D#|Eb': {completed: false},
    'e': {completed: false},
    completed: false,
    title: 'String 1',
  }); 
  
  const [string2Exercise, setString2Exercise] = useState({
    'B': {completed: false},
    'C': {completed: false},
    'C#|Db': {completed: false},
    'D': {completed: false},
    'D#|Eb': {completed: false},
    'E': {completed: false},
    'F': {completed: false},
    'F#|Gb': {completed: false},
    'G': {completed: false},
    'G#|Ab': {completed: false},
    'A': {completed: false},
    'A#|Bb': {completed: false},
    'b': {completed: false},
    completed: false,
    title: 'String 2'
  });
  const [string3Exercise, setString3Exercise] = useState({
    'G': {completed: false},
    'G#|Ab': {completed: false},
    'A': {completed: false},
    'A#|Bb': {completed: false},
    'B': {completed: false},
    'C': {completed: false},
    'C#|Db': {completed: false},
    'D': {completed: false},
    'D#|Eb': {completed: false},
    'E': {completed: false},
    'F': {completed: false},
    'F#|Gb': {completed: false},
    'g': {completed: false},
    completed: false,
    title: 'String 3'
  });
  const [string4Exercise, setString4Exercise] = useState({
    'D': {completed: false},
    'D#|Eb': {completed: false},
    'E': {completed: false},
    'F': {completed: false},
    'F#|Gb': {completed: false},
    'G': {completed: false},
    'G#|Ab': {completed: false},
    'A': {completed: false},
    'A#|Bb': {completed: false},
    'B': {completed: false},
    'C': {completed: false},
    'C#|Db': {completed: false},
    'd': {completed: false},
    completed: false,
    title: 'String 4'
  });
  const [string5Exercise, setString5Exercise] = useState({
    'A': {completed: false},
    'A#|Bb': {completed: false},
    'B': {completed: false},
    'C': {completed: false},
    'C#|Db': {completed: false},
    'D': {completed: false},
    'D#|Eb': {completed: false},
    'E': {completed: false},
    'F': {completed: false},
    'F#|Gb': {completed: false},
    'G': {completed: false},
    'G#|Ab': {completed: false},
    'a': {completed: false},
    completed: false,
    title: 'String 5'
  });
  const [string6Exercise, setString6Exercise] = useState({
    'E': {completed: false},
    'F': {completed: false},
    'F#|Gb': {completed: false},
    'G': {completed: false},
    'G#|Ab': {completed: false},
    'A': {completed: false},
    'A#|Bb': {completed: false},
    'B': {completed: false},
    'C': {completed: false},
    'C#|Db': {completed: false},
    'D': {completed: false},
    'D#|Eb': {completed: false},
    'e': {completed: false},
    completed: false,
    title: 'String 6'
  });

  const [exercises, setExercises] = useState({
    'A': {title: 'Chord A', completed: false},
    'B': {title: 'Chord B', completed: false},
    'C': {title: 'Chord C', completed: false},
    'D': {title: 'Chord D', completed: false},
    'E': {title: 'Chord E', completed: false},
    'F': {title: 'Chord F', completed: false},
    'G': {title: 'Chord G', completed: false},
  });*/

// Create exercises in firestore
  /* useEffect(() => {
    db.collection('exercises').doc('string1Exercise').set(string1Exercise);
    db.collection('exercises').doc('string2Exercise').set(string2Exercise);
    db.collection('exercises').doc('string3Exercise').set(string3Exercise);
    db.collection('exercises').doc('string4Exercise').set(string4Exercise);
    db.collection('exercises').doc('string5Exercise').set(string5Exercise);
    db.collection('exercises').doc('string6Exercise').set(string6Exercise);
    db.collection('exercises').doc('exercises').set(exercises);
  }, []) */

  const value = {
    actualExercise, setActualExercise, 
    resetExercise, choiceMenu, setChoiceMenu, 
    exercises, setExercises, 
    string1Exercise, setString1Exercise,
    string2Exercise, setString2Exercise,
    string3Exercise, setString3Exercise,
    string4Exercise, setString4Exercise,
    string5Exercise, setString5Exercise,
    string6Exercise, setString6Exercise,
    reset, setReset, currentUser, signup, 
    login, logout,
    openSignupModal, setOpenSignupModal,
    openLoginModal,setOpenLoginModal,
    googleSignup, githubSignup
  };

  return (
    <Context.Provider 
      value={value}>
      {!loading && props.children}
    </Context.Provider>
  );
};

export default ContextProvider;

