import React from 'react';
import Topbar from './components/Topbar';
import SelectGame from './components/SelectGame';
import Chords from './components/Chords';
import Notes from './components/Notes'; 
import ExercisesContextProvider from './components/Exercises';
import String1Notes from './components/strings/String1Notes'; 
import String2Notes from './components/strings/String2Notes'; 
import String3Notes from './components/strings/String3Notes'; 
import String4Notes from './components/strings/String4Notes'; 
import String5Notes from './components/strings/String5Notes'; 
import String6Notes from './components/strings/String6Notes'; 
import ChordA from './components/chords/ChordA';
import ChordB from './components/chords/ChordB';
import ChordC from './components/chords/ChordC';
import ChordD from './components/chords/ChordD';
import ChordE from './components/chords/ChordE';
import ChordF from './components/chords/ChordF';
import ChordG from './components/chords/ChordG';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className='app'>
      <Router>
        <ExercisesContextProvider>
          <Topbar />
          <Switch>
            <Route exact path='/' component={SelectGame} />
            <Route path='/notes' component={Notes} />
            <Route path='/notes-string-1' component={String1Notes} />
            <Route path='/notes-string-2' component={String2Notes} />
            <Route path='/notes-string-3' component={String3Notes} />
            <Route path='/notes-string-4' component={String4Notes} />
            <Route path='/notes-string-5' component={String5Notes} />
            <Route path='/notes-string-6' component={String6Notes} />
            <Route path='/chords' component={Chords} />
            <Route path='/chord-a' component={ChordA} />
            <Route path='/chord-b' component={ChordB} />
            <Route path='/chord-c' component={ChordC} />
            <Route path='/chord-d' component={ChordD} />
            <Route path='/chord-e' component={ChordE} />
            <Route path='/chord-f' component={ChordF} />
            <Route path='/chord-g' component={ChordG} />
          </ Switch>
        </ExercisesContextProvider> 
      </ Router>
      <Footer />
    </div>
  );
};

export default App;

