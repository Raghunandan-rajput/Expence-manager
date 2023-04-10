import React from 'react'
import ListItem from './ListItem';

function TransactionHistory({transaction,deleteTransaction}) {

  return (
    <>
     {/* start Transaction history */}
     <div className="showTransaction">
          <ul className="list-group">
          {
            transaction.map((item)=><ListItem transaction={item} key={item.id} deleteTransaction={deleteTransaction}/> )
          }
          </ul>
        </div>
        {/* end Transaction history */}
    </>
  )
}

export default TransactionHistory;