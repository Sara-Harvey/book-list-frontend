import React, { Component } from "react";

class BookCard extends React.Component {
	render() {
		return <div><h2>{this.props.book.title}</h2><h4>{this.props.book.category}</h4></div>;
	}
}

export default BookCard