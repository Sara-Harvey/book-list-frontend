import React from 'react';

import ListenContainer from './containers/ListenContainer';
import ReadContainer from './containers/ReadContainer';
import RandomContainer from './containers/RandomContainer';

import Categories from './components/Categories';
import About from './components/About';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./index.css";


class App extends React.Component {

  render() {
    return (
      <div>

        <Router>
          <div>

            <Switch>
              <Route exact path='/' component={Categories}/>    
              <Route exact path='/about' component={About}/>
              <Route exact path='/listen' component={ListenContainer}/>
              <Route exact path='/read' component={ReadContainer}/>
              <Route exact path='/random' component={RandomContainer}/>
            </Switch>
          </div>
        </Router>

      </div>

      );
    }
}

export default App;
