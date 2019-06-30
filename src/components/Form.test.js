import React from 'react'; 
import { shallow, mount } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(
    <Form 
      addPerson={ jest.fn() }
      />
      )
    expect(wrapper).toMatchSnapshot();
  })
  it('should set state on change', () => {
    const wrapper = shallow(
    <Form 
      addPerson={ jest.fn() }
      />
      )
    const preChange = {
      name: '',
      quote: '',
      superlative: '',
      category: ''
    }
    const postChange = {
      name: 'a',
      quote: 'b',
      superlative: 'c',
      category: 'd'
    }
    const input = wrapper.find('.name-input')
    expect(wrapper.state()).toEqual(preChange);
    input.simulate('change', { target: {name: 'name', value: 'a'} });
    input.simulate('change', { target: {name: 'quote', value: 'b'} });
    input.simulate('change', { target: {name: 'superlative', value: 'c'} });
    input.simulate('change', { target: {name: 'category', value: 'd'} });
    expect(wrapper.state()).toEqual(postChange);
  });

  it('should call preventDefault and addPerson on click', () => {
    const onButtonClickMock = jest.fn();
    const wrapper = shallow(
      <Form
        addPerson={onButtonClickMock}
      />,
    );
    const buttonElement = wrapper.find('.new-person-submit'); 
    buttonElement.simulate('click', {
      preventDefault: () => {
      }
    });
    expect(onButtonClickMock).toHaveBeenCalledTimes(1); 
  })
})