import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should add a new person', () => {
    const wrapper = shallow(
      <App />
    )
    const newPerson = {
      name: 'Dave',
      Quote: 'Suppp',
      superlative: 'Most likely to be chilllll',
      category: 'students'
    }
    expect(wrapper.state().students.length).toEqual(26)
    wrapper.instance().addPerson(newPerson)
    expect(wrapper.state().students.length).toEqual(27)
  })
})
