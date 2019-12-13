import React from 'react';
//import logo from './logo.svg';
import './App.css';
import GBNav from './components/navbar/GardenBookNavBar'
import { ChuckNorrisComponent } from './components/chuck-norris-component/ChuckNorrisComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import CookieClicker from './components/clicker-component/CookieClicker';
import LoginComponent from './components/login-component/LoginContainer';
import { Provider } from 'react-redux';
import { store } from './Store';
import TicTacToeComponent from './components/tic-tac-toe-component/TicTacToeContainer';
import  GardensDisplayComponent  from './components/gardens-display/GardensDisplayContainer';
//import { UserLoginStateComponent } from './components/user-login-state/UserLoginState';

//this is a function component
const App: React.FC = () => {
  //it needs to return some amount of jsx
  return (
    //only one root tag is allowed in the jsx we return
    <div className="App">
      <Provider store={store}>
        <Router>
          {/* <UserLoginStateComponent> */}
            <nav>
              <GBNav />
            </nav>
            {/* the switch is for matching single paths to the url
        it loads exactly one thing in the switch */}
            <Switch>
              <Route path='/login' component={LoginComponent} />
              <Route path='/clicker' component={CookieClicker} />
              <Route path='/chucknorris'>
                <header>
                  <ChuckNorrisComponent />
                </header>
              </Route>
              <Route path='/gardens/display' component={GardensDisplayComponent} />
              <Route path='/tictactoe' component={TicTacToeComponent} />
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          {/* </UserLoginStateComponent> */}
        </Router>
      </Provider>
    </div>

  );
}

export default App;
