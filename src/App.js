import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import './components/Header/Header.css';
import PhotoSection from './components/PhotoSection/PhotoSection';
import './components/PhotoSection/PhotoSection.css';
import Button from './components/Button/Button';
import './components/Button/Button.css';


function App() {
  return (
    <div className="App">
      <Header />
      <PhotoSection />
    { /* <div className="buttons-container1">
        <Button className="button-pink" text="Reproducir" />
      </div>
      <div className="buttons-container2">
        <Button className="button-pink" text="Más información" />
      </div> */}
    </div>

);
}

export default App;
