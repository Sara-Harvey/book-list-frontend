import React  from 'react'

import { connect } from 'react-redux';
import { addStory } from '../actions/addStory.js'


class NewContainer extends React.Component{

    state = {
      name:'',
      author:'',
      description:'',
      link:'',
      category_id:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

    handleSubmit = (event) => {
      event.preventDefault();

      this.props.addStory(this.state)
      this.setState({
        name:'',
        author:'',
        description:'',
        category_id:'',
        link:''
      });
    }

    render() { 
        return (

            <div className="container text-center">

              <form onSubmit={this.handleSubmit}>

                <input 
                  type="text" 
                  name="name" 
                  placeholder="title"
                  value={this.state.name}
                  onChange={this.handleChange}
                ></input>
                <br />

                <input
                  type="text"
                  name="author"
                  placeholder="author"
                  value={this.state.author}
                  onChange={this.handleChange}
                ></input>
                <br />

                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                ></input>
                <br />

                <input
                  type="text"
                  name="link"
                  placeholder="link"
                  value={this.state.link}
                  onChange={this.handleChange}
                ></input>
                <br />

                <input
                  type="number"
                  name="category_id"
                  placeholder="category"
                  value={this.state.category_id}
                  onChange={this.handleChange}
                ></input>
                <br />

                <button>Add story</button>

              </form>
            </div>
        );
    }
}

export default connect(null, {addStory})(NewContainer)