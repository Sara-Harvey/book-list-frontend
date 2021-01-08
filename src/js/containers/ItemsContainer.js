import React from 'react';
import { connect } from 'react-redux';//HOC

import Activities from '../components/Activities'
import {fetchCategories} from '../actions/fetchCategories';

//connect to the store

class ActivitiesContainer extends React.Component {

      
  componentDidMount() {
    this.props.fetchCategories()
  }
 
    render () {

        
        //  GET CATEGORYID
        let categoryId = Number(this.props.match.params.id)
         

        let currentCategory = this.props.categories.length > 0 && this.props.categories.filter(category => { 
            //console.log("filter(title): " + category.title)
            return category.id === categoryId})[0]

        let activities = currentCategory && currentCategory.activities

        console.log("Activities: " + activities)

      
        // Get Activities do Category

        if (!activities) {
            return <div> Loading ...</div>
        }

        return (
            <div>
                 <Activities activities={activities} />
            </div>
        )
    }
} 

const mapStateToProps = state => {
      
    return {
       categories: state.categories
    }
  }


export default connect(mapStateToProps, {fetchCategories})(ActivitiesContainer)