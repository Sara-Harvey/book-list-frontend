import React, { Component } from "react";
import { connect } from 'react-redux';
import { getData } from '../actions/index.js';

export class ListenContainer extends Component {

constructor(props) {
    super(props);
  }

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
  const mapStateToProps = state => {      
      return { data: state.stories };
  };

export default connect(mapStateToProps, {getData})(ListenContainer);
