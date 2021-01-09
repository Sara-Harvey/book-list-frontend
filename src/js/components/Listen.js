import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Listen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <ul>
        {this.props.data.map(data => (
          <li key={data.id}>
              <div class="name">{data.attributes.name}</div> 
              <div class="author">by {data.attributes.author}</div>
              <div class="description">{data.attributes.description}</div>
              <div class="link"><a href={data.attributes.link}>Link</a></div>
              <div class="category"><p>Category: {data.attributes.category.name}</p></div>
            </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.remoteStories
  };
}

export default connect(
  mapStateToProps,
  { getData }
)(Listen);