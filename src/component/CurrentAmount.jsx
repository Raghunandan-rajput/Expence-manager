import React from 'react'

function CurrentAmount({transaction}) {

  const currentBalance=transaction.filter(item=>item.amount).reduce((p,c)=>{
    return p+c.amount
  },0)

  
  return (
    <>
    {/* Current Balance section */}
    <div className="currentAmount mt-4 ">
          <p className="current-bal">CURRENT BALANCE</p>
          <h1>₹{currentBalance}</h1>
        </div>
    {/* end Current Balance Section */}
    </>
  )
}

export default CurrentAmount;