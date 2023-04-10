import CurrentAmount from "./component/CurrentAmount";
import CurrentIncome_Expense from "./component/CurrentIncome_Expense";
import Form from "./component/Form";
import Nav_bar from "./component/Nav_bar";
import TransactionHistory from "./component/TransactionHistory";
import { useState } from "react";
function App() {
const [transaction,setTransaction] =useState([])

const saveTransaction=(text,amount)=>{
  const newTransaction={
    id:crypto.randomUUID(),
    text,
    amount,
  }
  setTransaction([...transaction,newTransaction])
}
//DeleteTransaction
const deleteTransaction=(id)=>{
  // console.log(id)
  const delTransaction=transaction.filter((item)=>item.id !== id);
  setTransaction(delTransaction)
}

  return (
    <>
     <div className="main container col-8 ">
     <Nav_bar/>
     <Form saveTransaction={saveTransaction}/>
    <CurrentAmount transaction={transaction}/>
    <CurrentIncome_Expense transaction={transaction}/>
    <TransactionHistory transaction={transaction} deleteTransaction={deleteTransaction}/>
      </div>
    </>

  );
}

export default App;
