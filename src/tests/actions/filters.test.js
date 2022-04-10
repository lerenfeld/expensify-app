import moment from 'moment'
import {setEndDate , setStartDate , sortByDate, setTextFilter,sortByAmount} from '../../actions/filters'


test('should generate set start date action object',()=>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    startDate: moment(0) , 
    type : 'SET_START_DATE'
  })
})



test('should generate set end date action object',()=>{
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE' , 
    endDate : moment(0)
  })
})

test('should generate set sort action object' , ()=>{
  const action = sortByDate();
  expect (action).toEqual({
   type :  'SORT_BY_DATE'
  })
})

test('should generate action object for sort by amount' , ()=>{
  const action = sortByAmount();
  expect (action).toEqual({
   type :  'SORT_BY_AMOUNT'
  })
})



test('should generate text filter action object - with provided text value', ()=>{
  const text = 'text'
  const action = setTextFilter(text)
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})

test('should generate text filter action object - with  default value', ()=>{
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text : ''
  })
})