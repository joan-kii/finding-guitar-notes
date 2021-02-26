import React, { useState } from 'react';
import Topbar from './components/Topbar';
import SelectGame from './components/SelectGame';
import Fretboard from './components/Fretboard';
import Footer from './components/Footer';
import { fretboard, createFretboard } from './modules/createFretboard';

createFretboard();

const App = () => {

  const [isGameSelected, setIsGameSelected] = useState(false);
  console.log(isGameSelected)

  return (
    <div className="App">
      <Topbar />
      { isGameSelected ?
        <Fretboard fretboard={fretboard} /> :
        <SelectGame selectGame={setIsGameSelected}/> }
      <Footer />
    </div>
  );
};

export default App;

