import React from 'react';
import "./index.css";

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

export default class App extends React.Component {
render() {
  return (

    <Router>
      <div className="App">

        <Switch>
			<Route exact path='/' component={Home}/>  	
            <Route exact path='/about' component={About}/>
        </Switch>

      </div>
    </Router>

    );
  }
}