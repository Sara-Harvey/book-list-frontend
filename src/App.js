import React from 'react';

import Home from './components/Home';
import Header from './components/Header';
import StoryForm from './components/StoryForm';

import StoryContainer from './containers/StoryContainer';
import RandomContainer from './containers/RandomContainer';


import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  render() {
    return (
      <div>

        <Router>
          <div>
          <Header/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/random' component={RandomContainer}/>
              <Route exact path='/newstory' component={StoryForm}/>
              <Route path='/categories/:id/stories' component={StoryContainer}/>          
            </Switch>

          </div>
        </Router>

    </div>

    );
  }
}

export default App;
