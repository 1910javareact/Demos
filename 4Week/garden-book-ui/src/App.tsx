import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FirstComponent} from './components/first-component/FirstComponent'
import GBNav from './components/navbar/GardenBookNavBar'

//this is a function component
const App: React.FC = () => {
  //it needs to return some amount of jsx
  return (
    //only one root tag is allowed in the jsx we return
    <div className="App">
      <nav>
        <GBNav/>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FirstComponent/>
      <FirstComponent/>
      <FirstComponent/>
    </div>
    
  );
}

export default App;
