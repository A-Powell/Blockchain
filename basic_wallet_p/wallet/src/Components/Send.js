// import React, { useState } from 'react'
// import axios from 'axios'

// const Send = props => {
//     const [input, setInput] = useState({ amount: 0, recipient: '', sender: '' })


//     const submitAdd = e => {
//         e.preventDefault()
//         const info = {
//             sender: input.sender,
//             amount: input.amount,
//             recipient: input.recipient
//         }
//         axios.post('http://localhost:5000/transactions/new', info)
//             .then(res => {
//                 console.log(res)
//                 setInput({ amount: 0, recipient: '', sender: '' })
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }

//     const handleChanges = e => {
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value
//         })
//     }

//     return (
//         <div className="addform">
//             <form onSubmit={submitAdd}>
//                 <div className="addheader">
//                     <h2>Send some coins!</h2>
//                 </div>
//                 <>
//                     <label htmlFor="sender">Sender</label>
//                     <input
//                         id="sender"
//                         type="text"
//                         name="sender"
//                         value={input.sender}
//                         onChange={handleChanges}
//                         required
//                     />
//                 </>
//                 <>
//                     <label htmlFor="recipient">Recipient</label>
//                     <input
//                         id="recipient_name"
//                         type="text"
//                         name="recipient"
//                         value={input.recipient}
//                         onChange={handleChanges}
//                         required
//                     />
//                 </>
//                 <>
//                     <label htmlFor="amount">Amount</label>
//                     <input
//                         id="amount"
//                         type="text"
//                         name="amount"
//                         value={input.amount}
//                         onChange={handleChanges}
//                         required
//                     />
//                 </>

//                 <button>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Send