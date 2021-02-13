import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import  Home  from './Home';
import  Projects  from './Projects';
import  Contact  from './Contact';
import  NoMatch  from './NoMatch';
import calc_var from './projects/calculus_of_variations/calc_var';
import particles from './projects/p5js-particles/particles';
import earthquake_project from './projects/earthquakes/earthquake_project';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/projects/calculus_of_variations/calc_var' component={calc_var} />
              <Route exact path='/projects/p5js-particles/particles' component={particles} />
              <Route exact path='/projects/earthquakes/earthquake_project' component={earthquake_project} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
    </React.Fragment>
  );
}

export default App;
