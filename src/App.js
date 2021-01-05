import React from 'react';
import "./index.css";

const books = [
{id: 1, title: 'Lucky', author: 'Gabrielle Bell', category: 'Comic'},
{id: 2, title: 'Total Cat Mojo', author: 'Jackson Galaxy', category: 'Non-ficiton'},
{id: 3, title: 'Boys of Alabama', author: 'Genevieve Hudson', category: 'Fiction'},
]

export default class App extends React.Component {
render() {
  return (
      <div className="App">
      {books.map((book) => (
        <h2 key={book.id}>{book.title}</h2>
        ))}
      </div>
    );
  }
}