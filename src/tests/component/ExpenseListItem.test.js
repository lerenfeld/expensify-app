import React from 'react'
import moment from 'moment'
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with expense',()=>{
  const wrapper = shallow(<ExpenseListItem expenses= {...expenses[0]} />)
  expect(wrapper).toMatchSnapshot();
})

