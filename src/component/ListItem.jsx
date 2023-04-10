import React from "react";
import { FaTrash } from "react-icons/fa";
function ListItem({ transaction,deleteTransaction }) {
  return (
    <>
      <li className="list-group-item text-center p-0">
        <span className={transaction.amount >0 ? "float-start incomeGreen p-2":"float-start expenseRed p-2"}>₹ {transaction.amount}</span>
        {transaction.text}
        <button className="float-end p-2 px-3 bg-danger text-white border-0 btnhover" onClick={()=>deleteTransaction(transaction.id)}>
          <FaTrash />
        </button>
      </li>
    </>
  );
}

export default ListItem;
