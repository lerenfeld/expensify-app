import React from 'react'
import Header from '../../components/Header'
import {shallow} from 'enzyme'

test('should render Header correctly',  ()=>{
  const wrapper = shallow(<Header/>)

  // const renderer = new ReactshallowRenderer 
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()

  // expect(wrapper.find('h1').text()).toBe('Expensify');

  expect(wrapper).toMatchSnapshot();
});



