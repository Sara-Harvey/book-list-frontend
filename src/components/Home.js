import React from 'react';
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'

import "../App.css";

const Home = () => {
  return (
    <div className="jumbotron">
    <div className="container">
       <>
        
        <blockquote className="blockquote text-center">
        <h1>Two-Minute Media</h1><br></br>

	    <h4 className="mb-0 ">They say it takes two minutes to change an emotion.</h4> 
	    <h4 className="mb-0 ">Want to read or hear a two-minute story?</h4>
	    </blockquote>

	    <div><br></br><br></br><br></br><br></br>
        
        <h2 className="text-center">
            <Badge  pill variant="light" as={Link} to='/categories/1/stories'>Read</Badge>
			<Badge  pill variant="light" as={Link} to='/categories/2/stories'>Hear</Badge>
        	<Badge  pill variant="light" as={Link} to='/random'>Random</Badge>
        </h2>
        </div>  

        </>
      </div>
    </div>
  );
};

export default Home;