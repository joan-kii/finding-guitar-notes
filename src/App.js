import React from 'react';
import Topbar from './components/Topbar';
import SelectGame from './components/SelectGame';
import Chords from './components/Chords';
import Notes from './components/Notes'; 
import String1Notes from './components/strings/String1Notes'; 
import String2Notes from './components/strings/String2Notes'; 
import String3Notes from './components/strings/String3Notes'; 
import String4Notes from './components/strings/String4Notes'; 
import String5Notes from './components/strings/String5Notes'; 
import String6Notes from './components/strings/String6Notes'; 
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Router>
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
        </ Switch>
      </ Router>
      <Footer />
    </div>
  );
};

export default App;

