import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      category: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitNewPerson = (e) => {
    e.preventDefault();
    const newPerson = {...this.state, id: Date.now(), photo: 'https://placekitten.com/200/300'};
    this.props.addPerson(newPerson)
    this.resetInputs();
  }

  resetInputs = () => {
    this.setState({ name: '', quote: '', superlative: '', category: '' })
  }

  render() {
    return (
      <form className='new-person-form'>
        <h3>Add Person to Yearbook</h3>
        <input 
          type='text'
          name='name'
          placeholder='Name...'
          className='new-person-input name-input'
          value={this.state.name}
          onChange={this.handleChange}
          />
        <input 
          type='text'
          name='quote'
          placeholder='Quote...'
          className='new-person-input'
          value={this.state.quote}
          onChange={this.handleChange}
          />
        <input 
          type='text'
          name='superlative'
          placeholder='Superlative...'
          className='new-person-input'
          value={this.state.superlative}
          onChange={this.handleChange}
          />
        <select 
          name="category" 
          className='new-person-input'
          onChange={this.handleChange}
          value={this.state.category}
          >
          <option>Select an option...</option>
          <option value="students">Student</option>
          <option value="staff">Staff</option>
        </select>
        <button 
          className='new-person-input new-person-submit'
          onClick={this.submitNewPerson}>
            Add to Yearbook
        </button>
      </form>
    )
  }
}

export default Form;