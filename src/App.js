import React from 'react';
import Topbar from './components/Topbar';
import SelectGame from './components/SelectGame';
import Chords from './components/Chords';
import Notes from './components/Notes'; 
import ContextProvider from './context/Context';
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
        <ContextProvider>
          <Topbar />
          <Switch>
            <Route exact path='/finding-guitar-notes' component={SelectGame} />
            <Route path='/finding-guitar-notes/notes' component={Notes} />
            <Route path='/finding-guitar-notes/notes-string-1' component={String1Notes} />
            <Route path='/finding-guitar-notes/notes-string-2' component={String2Notes} />
            <Route path='/finding-guitar-notes/notes-string-3' component={String3Notes} />
            <Route path='/finding-guitar-notes/notes-string-4' component={String4Notes} />
            <Route path='/finding-guitar-notes/notes-string-5' component={String5Notes} />
            <Route path='/finding-guitar-notes/notes-string-6' component={String6Notes} />
            <Route path='/finding-guitar-notes/chords' component={Chords} />
            <Route path='/finding-guitar-notes/chord-a' component={ChordA} />
            <Route path='/finding-guitar-notes/chord-b' component={ChordB} />
            <Route path='/finding-guitar-notes/chord-c' component={ChordC} />
            <Route path='/finding-guitar-notes/chord-d' component={ChordD} />
            <Route path='/finding-guitar-notes/chord-e' component={ChordE} />
            <Route path='/finding-guitar-notes/chord-f' component={ChordF} />
            <Route path='/finding-guitar-notes/chord-g' component={ChordG} />
          </ Switch>
        </ContextProvider> 
      </ Router>
      <Footer />
    </div>
  );
};

export default App;

