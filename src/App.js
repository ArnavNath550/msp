import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import ScrollingContainer from './components/ScrollingContainer';
import MoreThanAllTheStarsInTheSky from './components/MoreThanAllTheStarsInTheSky';
import GrowingOldWithMySundori from './components/GrowingOldWithMySundori';
import ToMyBigGirl from './components/ToMyBigGirl';
import EkdomHappiestBirthday from './components/EkdomHappiestBirthday';

function App() {
  return (
    <div>
      <Hero />
      <ScrollingContainer />
      <MoreThanAllTheStarsInTheSky />
      <GrowingOldWithMySundori />
      <ToMyBigGirl />
      <EkdomHappiestBirthday />
    </div>
  );
}

export default App;
