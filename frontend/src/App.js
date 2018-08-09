import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    notes: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const notes = await res.json();
      this.setState({
        notes
      });
    }
    catch (e) {
        console.log(e);
      }
    }
  render() {
    return (
      <div className="Poop">
        <div className='Title'>
        <h1> Note/Todo List </h1> 
        </div>
        {this.state.notes.map(item => (
          <div className="note-card" key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
