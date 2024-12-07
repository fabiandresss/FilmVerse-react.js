import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import './components/Header/Header.css';
import PhotoSection from './components/PhotoSection/PhotoSection';
import './components/PhotoSection/PhotoSection.css';



function App() {
  return (
    <div className="App">
      <Header />
      <PhotoSection />
    </div>
  );
}

export default App;
