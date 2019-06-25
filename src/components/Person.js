import React from 'react';
import './Person.css';

export class Person extends React.Component {
  render() {
    return (
      <div className='person-container'>
        <img src={this.props.image} className='person-photo' alt='person'/>
        <h3 className='person-name'>{this.props.name}</h3>
        <p className='person-quote'>"{this.props.quote}"</p>
        <p className='person-superlative'>{this.props.superlative}</p>
      </div>
    )
  }
}

export default Person;

