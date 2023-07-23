import './App.css';
import { useEffect } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Intro from './components/Intro';
import StackSection from './components/StackSection';
import FooterSection from './components/FooterSection';

function App() {

  return (
      <div className="app">
        <Header/>
        <AboutSection/>
        <StackSection/>
        <FooterSection/>
      </div>
  );
}

export default App;
