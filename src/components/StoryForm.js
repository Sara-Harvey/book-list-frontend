import React  from 'react'
import { connect } from 'react-redux';
import { addStory } from '../actions/addStory.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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
          <h3>Add a story of your own</h3>

            <Form onSubmit={this.handleSubmit}>
                    
              <Form.Group controlId="formBasicName">
                <Form.Control 
                type="text" 
                name="name" 
                value={this.state.name} 
                onChange={this.handleChange} 
                placeholder="title" />  
              </Form.Group>

              <Form.Group controlId="formBasicAuthor">
                <Form.Control 
                type="text" 
                name="author" 
                value={this.state.author} 
                onChange={this.handleChange} 
                placeholder="author" />  
              </Form.Group>

              <Form.Group controlId="formBasicLink">
                <Form.Control 
                type="text" 
                name="link" 
                value={this.state.link} 
                onChange={this.handleChange} 
                placeholder="link" />  
              </Form.Group>

              <Form.Group controlId="formBasicDescription">
                <Form.Control 
                type="text" 
                name="description" 
                value={this.state.description} 
                onChange={this.handleChange} 
                placeholder="description" />  
              </Form.Group>

              <h4>Category</h4>

              <Form.Group controlId="formBasicCategory.ControlSelect1">
                <Form.Control 
                  as="select"
                  name="category_id"
                  value={this.state.category_id} 
                  onChange={this.handleChange} >  

                  <option label="read">1</option>
                  <option label="listen">2</option>

                </Form.Control>
              </Form.Group>
                    
              <Button variant="primary" type="submit"> Add story </Button>
            </Form>    
          
        </div>
        );
    }
}

export default connect(null, {addStory})(NewContainer)