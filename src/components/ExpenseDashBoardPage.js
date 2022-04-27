import React from 'react';
import ExpenseList from './ExpenseList';
import ExpensesSummary from './ExpensesSummary';



const ExpenseDashBoardPage = () => (
  <div>
    <ExpensesSummary/>
    <ExpenseList />
  </div>
)

export default ExpenseDashBoardPage;