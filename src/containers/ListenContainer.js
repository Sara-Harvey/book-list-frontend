// thunk info -- https://learn.co/tracks/full-stack-web-development-v8/module-17-redux/section-4-async-redux/redux-thunk
// most of the body of this code -- https://www.valentinog.com/blog/redux/#asynchronous-actions-in-redux-with-redux-thunk

import React, { Component } from "react";
// connects to the store
import { connect } from 'react-redux';

//import Story from '../components/Story';
// import Stories from '../components/Stories';
import { getData } from '../actions/index.js';

export class ListenContainer extends Component {

constructor(props) {
    super(props);
  }

// creating new DOM elements or setting up asynchronous functions
// you need to initialize state to use -- can do it like this:
// state = { key: "value" }
// example (inside render): const {categories} = this.props;
// https://learn.co/lessons/react-component-mounting-and-unmounting
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>
        { this.props.data.map(data => (
          <li key={data.id}>
            <div>{data.attributes.name}</div>
          </li>
        ))}
      </ul>
    );
  }
}

//
// mapStateToProps -- connects React component props (via Provider) to Redux state 
// component can access exact part of the store it needs
// mapDispatchToProps works similarly for actions
// https://www.valentinog.com/blog/redux/#react-redux-tutorial-connecting-react-with-redux
  
// the stateless ListenContainer component receives the prop "stories,"
// a copy of the stories array in the Redux state, recieved from reducer
  const mapStateToProps = state => {      
      return { data: state.stories };
  };

export default connect(mapStateToProps, {getData})(ListenContainer);
