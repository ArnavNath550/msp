import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import ScrollingContainer from './components/ScrollingContainer';
import MoreThanAllTheStarsInTheSky from './components/MoreThanAllTheStarsInTheSky';
import GrowingOldWithMySundori from './components/GrowingOldWithMySundori';

function App() {
  return (
    <div>
      <Hero />
      <ScrollingContainer />
      <MoreThanAllTheStarsInTheSky />
      <GrowingOldWithMySundori />
    </div>
  );
}

export default App;
