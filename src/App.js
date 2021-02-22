import Topbar from './components/Topbar';
import Fretboard from './components/Fretboard';
import Infozone from './components/Infozone';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Topbar />
      <Fretboard />
      <Infozone />
      <Footer />
    </div>
  );
};

export default App;

