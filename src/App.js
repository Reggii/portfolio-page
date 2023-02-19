import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Intro from './components/Intro';
import StackSection from './components/StackSection';

function App() {
  useEffect(() => {
    document.body.classList.add('bg');
  }, []);
  return (
    <div className="mainBody">
      <div className="app">
        <Header/>
        <Intro/>
        <AboutSection/>
        <StackSection/>
      </div>
    </div>
  );
}

export default App;
