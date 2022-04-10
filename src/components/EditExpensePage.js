import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'
import { useParams, useNavigate } from 'react-router-dom'



const EditExpensePage = (props) => {
  console.log(props);
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedExpense = props.expense.find((expense) => expense.id === id)

  return (
    <div>
      <h1>Edit Expense</h1>

      <ExpenseForm
        expense={selectedExpense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(id, expense))
          navigate('/');
        }}

      />

      <button onClick={() => {
        const expense = selectedExpense
        props.dispatch(removeExpense(expense))
        navigate('/');
      }}
      >remove</button>
 

    </div>
  )
}


const mapStateToProps = (state) => {

  return {
    expense: state.expenses
  }
}


export default connect(mapStateToProps)(EditExpensePage);

