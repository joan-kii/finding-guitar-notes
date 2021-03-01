import React from 'react';
import Topbar from './components/Topbar';
import SelectGame from './components/SelectGame';
import Chords from './components/Chords';
import Notes from './components/Notes'; 
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Topbar />
        <Switch>
          <Route exact path='/' component={SelectGame} />
          <Route path='/chords' component={Chords} />
          <Route path='/notes' component={Notes} />
        </ Switch>
      </ Router>
      <Footer />
    </div>
  );
};

export default App;

