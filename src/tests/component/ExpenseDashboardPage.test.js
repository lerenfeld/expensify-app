
import React from 'react'
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage'
import {shallow} from 'enzyme'

test('should render ExpenseDashBoardPage correctly',  ()=>{
  const wrapper = shallow(<ExpenseDashBoardPage/>)

  // const renderer = new ReactshallowRenderer 
  // renderer.render(<Header />)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()

  // expect(wrapper.find('h1').text()).toBe('Expensify');

  expect(wrapper).toMatchSnapshot();
});
