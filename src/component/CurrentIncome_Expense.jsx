import React from 'react'

function CurrentIncome_Expense(props) {
  const totalIncome=props.transaction.filter(item=> item.amount > 0).reduce((p,c)=>{
    return p+c.amount
  },0)

  const expenseIncome=props.transaction.filter(item=> item.amount < 0).reduce((p,c)=>{
    return p+c.amount
  },0)

  return (
    <>
    {/* Start current income or Expense */}
    <div className="current-main col-12">
          <div className="current-income mt-4 col-6">
            <span>
              <p className="currentExpense">CURRENT INCOME</p>
              <h1>₹{totalIncome}</h1>
            </span>
          </div>
          <div className="current-expense mt-4 col-6 ">
            <span> 
              <p className="currentExpense">CURRENT EXPENSE</p>
              <h1>₹ {expenseIncome}</h1>
            </span>
          </div>
        </div>
        {/* end Current income Expense  */}
    </>
  )
}

export default CurrentIncome_Expense;