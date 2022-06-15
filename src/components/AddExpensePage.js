
//new CODE - NOT WORKING (should be tests )

// import React from 'react';
// import { connect } from 'react-redux'
// import ExpenseForm from './ExpenseForm'
// import { addExpense } from '../actions/expenses'
// //import { useNavigate  } from 'react-router-dom'
// //import { useHistory } from "react-router-dom";

// export class AddExpensePage extends React.Component {

//   onSubmit = (expense) => {
//     //let history = useHistory(); 
//     //let navigate = useNavigate();
//     this.props.history.push('/');

//     this.props.onSubmit(expense);
//     //navigate('/');
//   };



//   render() {
//     return (
//       <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm
//           onSubmit={this.onSubmit}

//         />
//       </div>
//     );
//   };


// }

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: (expense) => dispatch(addExpense(expense))
// });

// export default connect(undefined, mapDispatchToProps)(AddExpensePage);





//OLD CODE - WORKING ( with no test)
import React from 'react';
import { connect } from 'react-redux';
import { useNavigate  } from "react-router-dom";
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import {startAddExpense} from '../actions/expenses'

const AddExpensePage = (props) => {

    const navigate = useNavigate();

    return ( 
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm
            onSubmit={(expense)=> {
                if (expense.description && expense.amount) {
                    props.dispatch(startAddExpense(expense));
                    navigate('/');
                }
            }}
        />
    </div>
)}

export default connect()(AddExpensePage);
