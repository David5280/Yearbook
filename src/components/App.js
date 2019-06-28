import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addPerson = (newPerson) => {
    this.setState({[newPerson.category]: [...this.state[newPerson.category], newPerson]});
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Turing Yearbook</h1>
      </header>
      <Form addPerson={this.addPerson} />
        <h2>Staff</h2>
          <div className='cohort-container'> 
            <Cohort peopleData={ this.state.staff } />
          </div>
        <h2>Students</h2>
          <div className='cohort-container'> 
            <Cohort peopleData={ this.state.students } />
          </div>
      </div>
    );
  }
}

export default App;
