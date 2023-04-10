import React, { useState } from 'react'

function Form({saveTransaction}) {
  const [text,setText]=useState("")
  const [amount,setAmount]=useState("")
const handlesubmit=(e)=>
{
  e.preventDefault()
  saveTransaction(text,Number(amount))
  setText("")
  setAmount("")
}
  
  return (
   <>
    {/* form start */}
   <div className="form-data">
     <form className="col-12 mt-4 first-div" onSubmit={(e)=>handlesubmit(e)}>
       <div className="mb-2 w-50">
         <input type="text" className="form-control " id="title" placeholder="Enter Your Transaction" required value={text} onChange={(e)=>setText(e.target.value)} />
       </div>
       <div className="mb-2 w-50">
         <input type="number" className="form-control " id="number" placeholder="Enter  Amount"  required value={amount} onChange={(e)=>setAmount(e.target.value)} />
       </div>
       <button type="submit" className="btn btn-primary w-50 submitbtn">Save Transaction</button>
     </form>
   </div>
   {/* end form */}
   </>
  )
}

export default Form;