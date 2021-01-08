import React from 'react';
import Listen from './js/components/Listen';
import Read from './js/components/Read';
import Random from './js/components/Random';
import "./index.css";

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Categories from './js/components/Categories';
import About from './js/components/About';

export default class App extends React.Component {
render() {
  return (
    <div>

      <Router>
        <div className="App">

          <Switch>
            <Route exact path='/' component={Categories}/>    
            <Route exact path='/about' component={About}/>
            <Route exact path='/listen' component={Listen}/>
            <Route exact path='/read' component={Read}/>
            <Route exact path='/random' component={Random}/>
          </Switch>
        </div>
      </Router>    

    </div>
    );
  }
}