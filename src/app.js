import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 100, createdAt: 3000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Rent bill', amount: 5000, createdAt: 1000 }));



const state = store.getState();
const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(VisibleExpenses)


const jsx = (
    <Provider store = {store}>
        <AppRouter />

    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
