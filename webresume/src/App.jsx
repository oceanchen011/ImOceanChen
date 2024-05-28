import React from 'react';
import './App.css';
import NavBar from './components/Internal/NavBar';
import Intro from './components/Internal/Intro';
import { TextParrallaxContentMain } from './components/TextParrallaxContentMain';

function App() {
  return (
    <div className='main'>
      <NavBar />
      <TextParrallaxContentMain />
    </div>
  );
}

export default App;
