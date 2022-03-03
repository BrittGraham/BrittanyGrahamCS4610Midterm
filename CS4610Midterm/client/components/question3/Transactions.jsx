import { useEffect, useState } from "react"

//I have a similar confusion with this as number 1. Wouldn't this be easier if it was put into
// the _question_3 component instead of it's own? If I could meet in office hours after this has been graded
// I would love to talk about what I could have done.
export const Transactions = () => {
    const [transaction, setTransactions] = useState('');
    useEffect(async () => {
        const {transacts} = await api.get('/transactions');
        setTransactions(transacts);
      })
    return (
        <div>
            <div>{transaction.fromUser.name} gave {transaction.amount} to {transaction.toUser.name}</div>
        </div>
    )
}