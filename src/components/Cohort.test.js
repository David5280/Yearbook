import React from 'react'; 
import { shallow, mount } from 'enzyme';
import Cohort from './Cohort';
import { exportAllDeclaration } from '@babel/types';

describe('Cohort', () => {
  it('should match the snapshot', () => {
    const wrapper = <Cohort 
      peopleData={ 'fakeData' }
      />
    expect(wrapper).toMatchSnapshot();
  })
})