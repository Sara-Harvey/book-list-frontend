import React from 'react';

import Home from './components/Home';
import StoryContainer from './containers/StoryContainer';
import RandomContainer from './containers/RandomContainer';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "./index.css";


class App extends React.Component {

  render() {
    return (
      <div>

        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/random' component={RandomContainer}/>
              <Route path='/categories/:id/stories' component={StoryContainer}/>            
            </Switch>
          </div>
        </Router>
    
    <div>
      <p>NAV</p>
      <p><a href="http://localhost:3000/categories/1/stories">Read</a></p>
      <p><a href="http://localhost:3000/categories/2/stories">Listen</a></p>

      <p><a href="http://localhost:3000/random">Random</a></p>
      <p><a href="http://localhost:3000/">Home</a></p>
    </div>

    </div>

    );
  }
}

export default App;
