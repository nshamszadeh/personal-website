import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  Home  from './Home';
import  Projects  from './Projects';
import  Contact  from './Contact';
import  NoMatch  from './NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
        <>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </>
    </React.Fragment>
  );
}

export default App;
