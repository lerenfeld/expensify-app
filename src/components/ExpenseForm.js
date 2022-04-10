import React from 'react';
import moment from 'moment'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'



export default class ExpenseForm extends React.Component {
  
  constructor(props){
    super(props);

    this.state = { 
      description: props.expense ? props.expense.description :  '' , 
      note : props.expense ? props.expense.note :  '' , 
      amount : props.expense ?  (props.expense.amount / 100).toString() : '' , 
      createdAt : props.expense ? moment(props.expense.createdAt) : moment() , 
      calanderFocused : false ,
      error : ''
    }
  }
  
  //state
  state = {
    description: '' , 
    note :'',
    amount : '' , 
    createdAt : moment() , 
    calanderFocused : false ,
    error : ''
  };

  //functions
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };

  onNoteChange=(e)=>{
    const note = e.target.value ; 
    this.setState(()=>({note}))
  };

  onAmountChange=(e)=>{
    const amount = e.target.value ; 
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/gm)){
      this.setState(()=>({amount}))
    }
  }

  onDateChange=(createdAt)=>{
    this.setState(()=>({createdAt}))
  };

  onFocuseChange=({focused})=>{
    this.setState(()=>({calanderFocused : focused}))
  };
 
  onSubmit=(e)=>{
    e.preventDefault();

    if(!this.state.description || !this.state.amount){
      const error = 'Please provide description and amount'
      this.setState(()=>({error}))
    }else{
      this.setState(()=>({error:''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount , 10) * 100,
        createdAt : this.state.createdAt.valueOf(),
        note : this.state.note 
      });
    }

  };



  //render
  render() {
    return (
      <div>

        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit ={this.onSubmit}>
          <input
            type='text'
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            placeholder='amount'
            type = 'text'
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
          date  = {this.state.createdAt}
          onDateChange = {this.onDateChange}
          focused = {this.state.calanderFocused}
          onFocusChange = {this.onFocuseChange}
          numberOfMonths = {1}
          isOutsideRange = {()=> false}
          />

          <textarea
            placeholder='Add a note for your expense (optional)' 
            value={this.state.note}
            onChange={this.onNoteChange}
          />

          <button>Add Expense</button>

        </form>
      </div>
    )
  }

};