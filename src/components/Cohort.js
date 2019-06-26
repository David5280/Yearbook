import React from 'react';
import Person from './Person';
import './Cohort.css';



export class Cohort extends React.Component {
  render() {
    return this.props.peopleData.map((person) => (
      <Person id={person.id} image={person.photo} name={person.name} quote={person.quote} superlative={person.superlative} key={person.id}/>
    ))
  }
}

export default Cohort

