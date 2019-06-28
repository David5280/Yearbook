import React from 'react'; 
import { shallow, mount } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Form 
      addPerson={ jest.fn() }
      />)
    expect(wrapper).toMatchSnapshot();
  })
})