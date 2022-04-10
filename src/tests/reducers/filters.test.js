import filterReducers from '../../reducers/filters'
import moment from 'moment'

test('should setup defult values', () => {
  const state = filterReducers(undefined, { type: '@@INIT' })
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})


//sholud set text filter
test('should set text filter', () => {
  const text = 'text';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  }
  const state = filterReducers(undefined, action)
  expect(state.text).toBe(text);
})


//should set startDate filter
test('should set startDate filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    startDate
  };

  const state = filterReducers(undefined, action)
  expect(state.startDate).toEqual(startDate);

});


//should set endDate filter
test('should set endDate filter', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    endDate
  };

  const state = filterReducers(undefined, action)
  expect(state.endDate).toEqual(endDate);

})

