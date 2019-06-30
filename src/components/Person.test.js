import React from 'react'; 
import { shallow, mount } from 'enzyme';
import Person from './Person';

describe('Person', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow( 
    <Person 
      id="4"
      image="fake url" 
      name='Dave'
      quote='ayeee'
      superlative='aye'
      key='4'
      />
    );

    expect(wrapper).toMatchSnapshot(); 
  })
});