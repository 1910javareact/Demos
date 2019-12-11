import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {FirstComponent} from './components/first-component/FirstComponent'
import GBNav from './components/navbar/GardenBookNavBar'
import { ChuckNorrisComponent } from './components/chuck-norris-component/ChuckNorrisComponent';

//this is a function component
const App: React.FC = () => {
  //it needs to return some amount of jsx
  return (
    //only one root tag is allowed in the jsx we return
    <div className="App">
      <nav>
        <GBNav/>
      </nav>
      <header>
        <ChuckNorrisComponent/>
      </header>
      <FirstComponent/>
      <FirstComponent/>
      <FirstComponent/>
    </div>
    
  );
}

export default App;
